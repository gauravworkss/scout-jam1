import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, ExternalLink, Calendar, Heart, Repeat2, Brain, TrendingUp, Users, BookOpen, Pen, Shield, Moon, Sun } from "lucide-react";
import { tweets, categories, authors, categoryDescriptions, type Category, type Tweet } from "@/data/tweets";
import { useTheme } from "@/hooks/use-theme";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [selectedTab, setSelectedTab] = useState("all");
  const { theme, toggleTheme, isDark } = useTheme();

  const filteredTweets = useMemo(() => {
    return tweets.filter(tweet => {
      const matchesSearch = tweet.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tweet.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tweet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || tweet.category === selectedCategory;
      const matchesAuthor = selectedAuthor === "all" || tweet.author.handle === selectedAuthor;
      
      return matchesSearch && matchesCategory && matchesAuthor;
    });
  }, [searchQuery, selectedCategory, selectedAuthor]);

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case "Investment Strategy & Analysis": return <TrendingUp className="w-4 h-4" />;
      case "Psychology & Behavioral Finance": return <Brain className="w-4 h-4" />;
      case "Entrepreneurship & Business": return <Users className="w-4 h-4" />;
      case "Personal Development & Mastery": return <BookOpen className="w-4 h-4" />;
      case "Writing & Communication": return <Pen className="w-4 h-4" />;
      case "Risk & Decision Making": return <Shield className="w-4 h-4" />;
      default: return null;
    }
  };

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case "Investment Strategy & Analysis": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Psychology & Behavioral Finance": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Entrepreneurship & Business": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Personal Development & Mastery": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Writing & Communication": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      case "Risk & Decision Making": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const TweetCard = ({ tweet }: { tweet: Tweet }) => (
    <Card className="group card-hover border-l-4 border-l-primary/20 hover:border-l-primary bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="text-xs font-medium">
                {tweet.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">{tweet.author.name}</h3>
                <span className="text-muted-foreground text-xs">@{tweet.author.handle}</span>
              </div>
              <p className="text-xs text-muted-foreground">{tweet.author.bio}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {formatDate(tweet.date)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed mb-4">{tweet.content}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className={getCategoryColor(tweet.category)}>
              {getCategoryIcon(tweet.category)}
              <span className="ml-1 text-xs">{tweet.category}</span>
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1 text-xs">
              <Heart className="w-3 h-3" />
              {tweet.likes.toLocaleString()}
            </div>
            {tweet.retweets > 0 && (
              <div className="flex items-center gap-1 text-xs">
                <Repeat2 className="w-3 h-3" />
                {tweet.retweets.toLocaleString()}
              </div>
            )}
            <Button variant="ghost" size="sm" asChild className="h-6 px-2">
              <a href={tweet.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </div>
        </div>
        
        {tweet.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tweet.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h1 className="font-serif text-3xl md:text-4xl font-bold gradient-text">
                Wisdom Archive
              </h1>
              <p className="text-muted-foreground mt-2">
                Curated insights from leading thinkers in investing, psychology, and human nature
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search insights, authors, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as Category | "all")}>
                  <SelectTrigger className="w-[200px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(category)}
                          {category}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Authors</SelectItem>
                    {Object.values(authors).map(author => (
                      <SelectItem key={author.handle} value={author.handle}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {/* Theme Toggle */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="shrink-0 hover:bg-primary/10 transition-all duration-200"
                  aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                >
                  <div className="relative w-4 h-4">
                    <Sun className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                    <Moon className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
                  </div>
                </Button>
              </div>
            </div>
            
            {/* Stats and Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                Showing {filteredTweets.length} of {tweets.length} insights
              </div>
              {(searchQuery || selectedCategory !== "all" || selectedAuthor !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedAuthor("all");
                  }}
                  className="text-xs"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Curated Wisdom from Leading Thinkers
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover insights spanning investment strategy, psychology, entrepreneurship, and personal mastery 
              from Twitter's most influential voices in business and finance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(category => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedTab("all");
                  }}
                  className="flex items-center gap-2 h-auto py-3 px-4 text-xs"
                >
                  {getCategoryIcon(category)}
                  <span className="hidden sm:inline">{category.split(' ')[0]}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="all">All Insights</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Most Liked</TabsTrigger>
            <TabsTrigger value="authors">By Author</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {filteredTweets.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {filteredTweets
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {filteredTweets
                .sort((a, b) => b.likes - a.likes)
                .map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="authors" className="space-y-8">
            {Object.values(authors).map(author => {
              const authorTweets = filteredTweets.filter(tweet => tweet.author.handle === author.handle);
              if (authorTweets.length === 0) return null;
              
              return (
                <div key={author.handle} className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="font-medium">
                        {author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{author.name}</h3>
                      <p className="text-muted-foreground text-sm">{author.bio}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {authorTweets.length} insight{authorTweets.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {authorTweets.map(tweet => (
                      <TweetCard key={tweet.id} tweet={tweet} />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>
          
          <TabsContent value="categories" className="space-y-8">
            {categories.map(category => {
              const categoryTweets = filteredTweets.filter(tweet => tweet.category === category);
              if (categoryTweets.length === 0) return null;
              
              return (
                <div key={category} className="space-y-4">
                  <div className="pb-4 border-b">
                    <div className="flex items-center gap-3 mb-2">
                      {getCategoryIcon(category)}
                      <h3 className="font-semibold text-lg">{category}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{categoryDescriptions[category]}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {categoryTweets.length} insight{categoryTweets.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {categoryTweets.map(tweet => (
                      <TweetCard key={tweet.id} tweet={tweet} />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
        
        {filteredTweets.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No insights found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedAuthor("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Curated wisdom from Twitter's leading thinkers (2020-2025)</p>
            <p className="mt-2">
              Follow: {Object.values(authors).map((author, index) => (
                <span key={author.handle}>
                  <a
                    href={`https://twitter.com/${author.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary underline"
                  >
                    @{author.handle}
                  </a>
                  {index < Object.values(authors).length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
