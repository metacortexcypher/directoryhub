import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Home,
  Brain,
  Zap,
  MessageSquare,
  Code2,
  Palette,
  Search,
  Phone,
  PenTool,
  FileText,
  Mail,
  Headphones,
  DollarSign,
  Trophy,
  ChevronDown
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { agencies } from "@/lib/agency-data"

export default function HomePage() {
  const categories = [
    { name: "All", icon: Home },
    { name: "AI & Machine Learning", icon: Brain },
    { name: "Web Development", icon: Code2 },
    { name: "Design & UX", icon: Palette },
    { name: "Digital Marketing", icon: MessageSquare },
    { name: "Content Creation", icon: PenTool },
    { name: "SEO", icon: Search },
    { name: "Social Media", icon: Phone },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r bg-background p-4 lg:block">
        <ScrollArea className="h-[calc(100vh-2rem)]">
          <nav className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="flex h-16 items-center px-6 gap-4 justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">AgencyHub</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium">
                For Agencies
              </Link>
              <Button variant="outline">Log in</Button>
              <Button>Sign up</Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Find the perfect agency for your project</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Browse our curated list of top-tier agencies across various industries and specialties.
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2">
                <Input placeholder="Search agencies..." className="flex-1" />
                <Button>Search</Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.slice(0, 5).map((category) => (
                <Badge key={category.name} variant="secondary" className="text-sm">
                  {category.name}
                </Badge>
              ))}
              <Badge variant="secondary" className="text-sm">
                More <ChevronDown className="h-4 w-4 ml-1" />
              </Badge>
            </div>
            <Button size="lg">
              Submit Your Agency
            </Button>
          </section>

          {/* Advanced Search and Filters */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.name} value={category.name.toLowerCase()}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price-range">Price Range</Label>
                    <Slider
                      id="price-range"
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="worldwide">Worldwide</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Team Size</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox id="small" />
                      <label htmlFor="small" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Small (1-10)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox id="medium" />
                      <label htmlFor="medium" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Medium (11-50)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox id="large" />
                      <label htmlFor="large" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Large (50+)
                      </label>
                    </div>
                  </div>
                </div>
                <Button className="mt-4">Apply Filters</Button>
              </CardContent>
            </Card>
          </section>

          {/* Agency Listing */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">All Agencies</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {agencies.map((agency) => (
                <Link href={`/agency/${agency.id}`} key={agency.id}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Image
                        src={agency.image}
                        alt={agency.name}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle>{agency.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{agency.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mb-2">
                        {agency.categories.slice(0, 3).map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Starting at ${agency.startingPrice}/project</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}