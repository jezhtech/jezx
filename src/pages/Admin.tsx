
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShoppingBag, 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data
  const stats = [
    { title: "Total Sales", value: "$45,231", change: "+12.5%", icon: DollarSign, color: "text-green-400" },
    { title: "Total Orders", value: "1,234", change: "+8.2%", icon: ShoppingBag, color: "text-blue-400" },
    { title: "Active Jobs", value: "8", change: "+2", icon: Briefcase, color: "text-purple-400" },
    { title: "Website Views", value: "23,456", change: "+15.3%", icon: Eye, color: "text-cyan-400" }
  ];

  const recentOrders = [
    { id: "ORD001", customer: "John Doe", product: "JezX Developer Hoodie", amount: "$79.99", status: "completed" },
    { id: "ORD002", customer: "Jane Smith", product: "Code the Future T-Shirt", amount: "$29.99", status: "processing" },
    { id: "ORD003", customer: "Mike Johnson", product: "Mechanical Keyboard", amount: "$149.99", status: "shipped" }
  ];

  const jobApplications = [
    { id: "APP001", name: "Alice Cooper", position: "Full Stack Developer", status: "pending", date: "2024-01-15" },
    { id: "APP002", name: "Bob Wilson", position: "AI/ML Engineer", status: "reviewed", date: "2024-01-14" },
    { id: "APP003", name: "Carol Brown", position: "UX/UI Designer", status: "interview", date: "2024-01-13" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">Admin Dashboard</h1>
            <p className="text-white/70">Manage your business operations from one central location.</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 glass-effect border-jezx-cyan/20">
              <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-jezx-cyan/20">Dashboard</TabsTrigger>
              <TabsTrigger value="ecommerce" className="text-white data-[state=active]:bg-jezx-cyan/20">E-commerce</TabsTrigger>
              <TabsTrigger value="careers" className="text-white data-[state=active]:bg-jezx-cyan/20">Careers</TabsTrigger>
              <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-jezx-cyan/20">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="glass-card border-jezx-cyan/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/70 text-sm">{stat.title}</p>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <Card className="glass-card border-jezx-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 glass-effect rounded-lg">
                          <div>
                            <p className="text-white font-medium">{order.customer}</p>
                            <p className="text-white/70 text-sm">{order.product}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gradient font-bold">{order.amount}</p>
                            <Badge 
                              variant="outline" 
                              className={
                                order.status === 'completed' ? 'border-green-400 text-green-400' :
                                order.status === 'processing' ? 'border-yellow-400 text-yellow-400' :
                                'border-blue-400 text-blue-400'
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Job Applications */}
                <Card className="glass-card border-jezx-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">Job Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {jobApplications.map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 glass-effect rounded-lg">
                          <div>
                            <p className="text-white font-medium">{app.name}</p>
                            <p className="text-white/70 text-sm">{app.position}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white/70 text-sm">{app.date}</p>
                            <Badge 
                              variant="outline" 
                              className={
                                app.status === 'interview' ? 'border-green-400 text-green-400' :
                                app.status === 'reviewed' ? 'border-blue-400 text-blue-400' :
                                'border-yellow-400 text-yellow-400'
                              }
                            >
                              {app.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">E-commerce Management</h2>
                <Button className="premium-button text-black font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>

              <Card className="glass-card border-jezx-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">Product Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input placeholder="Product Name" className="bg-white/5 border-white/20 text-white" />
                      <Input placeholder="Price" className="bg-white/5 border-white/20 text-white" />
                      <Input placeholder="Category" className="bg-white/5 border-white/20 text-white" />
                    </div>
                    <Textarea placeholder="Product Description" className="bg-white/5 border-white/20 text-white" />
                    <div className="flex gap-4">
                      <Button className="premium-button text-black">Save Product</Button>
                      <Button variant="outline" className="border-white/20 text-white">Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Career Management</h2>
                <Button className="premium-button text-black font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
              </div>

              <Card className="glass-card border-jezx-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">Job Posting Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Job Title" className="bg-white/5 border-white/20 text-white" />
                      <Input placeholder="Location" className="bg-white/5 border-white/20 text-white" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Experience Required" className="bg-white/5 border-white/20 text-white" />
                      <Input placeholder="Salary Range" className="bg-white/5 border-white/20 text-white" />
                    </div>
                    <Textarea placeholder="Job Description" className="bg-white/5 border-white/20 text-white" />
                    <Textarea placeholder="Requirements (comma separated)" className="bg-white/5 border-white/20 text-white" />
                    <div className="flex gap-4">
                      <Button className="premium-button text-black">Post Job</Button>
                      <Button variant="outline" className="border-white/20 text-white">Save Draft</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Analytics & Reports</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-card border-jezx-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">Sales Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <TrendingUp className="w-16 h-16 text-jezx-cyan mx-auto mb-4" />
                      <p className="text-white/70">Sales chart would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-jezx-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">User Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 text-jezx-cyan mx-auto mb-4" />
                      <p className="text-white/70">User engagement metrics would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
