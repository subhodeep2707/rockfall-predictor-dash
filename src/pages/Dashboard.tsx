import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Shield } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy data for the risk trend chart
const riskTrendData = [
  { date: '2024-01', riskScore: 45 },
  { date: '2024-02', riskScore: 52 },
  { date: '2024-03', riskScore: 48 },
  { date: '2024-04', riskScore: 61 },
  { date: '2024-05', riskScore: 72 },
  { date: '2024-06', riskScore: 68 },
  { date: '2024-07', riskScore: 75 },
  { date: '2024-08', riskScore: 71 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time monitoring of rockfall risk in pit mining operations
        </p>
      </div>

      {/* Risk Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg border-l-4 border-l-risk-medium">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Risk Level</CardTitle>
            <AlertTriangle className="h-4 w-4 text-risk-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Medium Risk</div>
            <Badge className="mt-2 bg-risk-medium text-risk-medium-foreground">
              Active Monitoring
            </Badge>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Probability</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">72%</div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on current slope conditions
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safety Recommendation</CardTitle>
            <Shield className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-foreground mb-2">
              Install barriers on slope
            </div>
            <p className="text-xs text-muted-foreground">
              Immediate action recommended for sections 7-12
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Risk Trend Chart */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Risk Trend Analysis</CardTitle>
          <p className="text-sm text-muted-foreground">
            Monthly risk score progression over the past 8 months
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={riskTrendData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="riskScore"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                  name="Risk Score (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;