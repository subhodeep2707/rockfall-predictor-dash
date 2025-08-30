import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AnalysisData {
  slope_angle: number;
  Predicted_Risk: string;
  Probability: number;
}

// Mock response data for demonstration
const mockAnalysisData: AnalysisData[] = [
  { slope_angle: 45, Predicted_Risk: "High", Probability: 0.85 },
  { slope_angle: 30, Predicted_Risk: "Medium", Probability: 0.62 },
  { slope_angle: 25, Predicted_Risk: "Low", Probability: 0.23 },
  { slope_angle: 55, Predicted_Risk: "High", Probability: 0.91 },
  { slope_angle: 35, Predicted_Risk: "Medium", Probability: 0.58 },
  { slope_angle: 20, Predicted_Risk: "Low", Probability: 0.15 },
];

const UploadData = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisData, setAnalysisData] = useState<AnalysisData[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a CSV file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // Replace 'YOUR_BACKEND_URL' with your actual backend URL
      const response = await fetch('YOUR_BACKEND_URL/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setAnalysisData(data);
      
      toast({
        title: "Upload successful",
        description: `Successfully analyzed ${data.length} records from ${selectedFile.name}`,
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high':
        return 'bg-risk-high text-risk-high-foreground';
      case 'medium':
        return 'bg-risk-medium text-risk-medium-foreground';
      case 'low':
        return 'bg-risk-low text-risk-low-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  // Prepare chart data
  const riskCounts = analysisData.reduce((acc, item) => {
    const risk = item.Predicted_Risk;
    acc[risk] = (acc[risk] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(riskCounts).map(([risk, count]) => ({
    risk,
    count,
    fill: risk === 'High' ? 'hsl(var(--risk-high))' : 
          risk === 'Medium' ? 'hsl(var(--risk-medium))' : 
          'hsl(var(--risk-low))'
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Upload Data</h1>
        <p className="text-muted-foreground">
          Upload CSV files for rockfall risk analysis
        </p>
      </div>

      {/* Upload Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Data Upload
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept=".csv"
              onChange={handleFileSelect}
              className="flex-1"
            />
            <Button 
              onClick={handleUpload} 
              disabled={!selectedFile || isUploading}
              className="bg-primary hover:bg-primary/90"
            >
              {isUploading ? "Processing..." : "Upload & Analyze"}
            </Button>
          </div>
          
          {selectedFile && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
            </div>
          )}
          
          <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
            <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">Expected CSV format:</p>
              <p>Columns should include slope angle data and other geological parameters.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {analysisData.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data Table */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Slope Angle</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Probability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {analysisData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.slope_angle}°</TableCell>
                      <TableCell>
                        <Badge className={getRiskBadgeColor(row.Predicted_Risk)}>
                          {row.Predicted_Risk}
                        </Badge>
                      </TableCell>
                      <TableCell>{(row.Probability * 100).toFixed(1)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Risk Distribution Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Risk Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="risk" 
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
                    <Bar 
                      dataKey="count" 
                      name="Count"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UploadData;