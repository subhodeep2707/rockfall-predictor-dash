import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Database, 
  AlertTriangle, 
  Shield,
  TrendingUp
} from "lucide-react";

const Reports = () => {
  const handleDownloadReport = () => {
    // This would be implemented to generate and download a report
    console.log("Downloading report...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis and reporting of rockfall risk assessments
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-lg border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <Database className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-muted-foreground mt-2">
              Slope measurements analyzed
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-risk-high">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-risk-high" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">89</div>
            <p className="text-xs text-muted-foreground mt-2">
              7.1% of total measurements
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-risk-medium">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Risk Cases</CardTitle>
            <TrendingUp className="h-4 w-4 text-risk-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">412</div>
            <p className="text-xs text-muted-foreground mt-2">
              33.0% of total measurements
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-risk-low">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Risk Cases</CardTitle>
            <Shield className="h-4 w-4 text-risk-low" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">746</div>
            <p className="text-xs text-muted-foreground mt-2">
              59.9% of total measurements
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Report Generation Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Generate Report</CardTitle>
          <p className="text-sm text-muted-foreground">
            Download comprehensive analysis reports for stakeholders
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Executive Summary</h4>
              <p className="text-sm text-muted-foreground">
                High-level overview of risk assessment findings with key recommendations
                for mine safety management.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Technical Details</h4>
              <p className="text-sm text-muted-foreground">
                Detailed analysis including slope measurements, risk calculations,
                and methodology documentation.
              </p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <Button 
              onClick={handleDownloadReport}
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Full Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Analysis Summary */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Risk Trends</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 15% increase in medium-risk areas</li>
                  <li>• 3 new high-risk zones identified</li>
                  <li>• Overall risk score: 72%</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Safety Recommendations</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Install barriers in sections 7-12</li>
                  <li>• Increase monitoring frequency</li>
                  <li>• Review blast patterns in zone C</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Next Actions</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Schedule weekly risk assessment</li>
                  <li>• Update safety protocols</li>
                  <li>• Train staff on new procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;