import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Brain, 
  Shield, 
  TrendingUp,
  Users,
  Target
} from "lucide-react";

const About = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Rockfall Prediction in Pit Mines
        </h1>
        <p className="text-muted-foreground text-lg">
          Advanced predictive analytics for mining safety and risk management
        </p>
      </div>

      {/* Main Description */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            This dashboard demonstrates a prototype for predicting rockfall risk in open-pit 
            mining operations. Currently, predictions are simulated using statistical models 
            and historical data patterns. In the future, an advanced machine learning model 
            will be integrated for real-time analysis and enhanced accuracy.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Prototype</Badge>
            <Badge variant="secondary">Risk Assessment</Badge>
            <Badge variant="secondary">Mining Safety</Badge>
            <Badge variant="secondary">Predictive Analytics</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Brain className="h-5 w-5 text-primary" />
              AI-Powered Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Advanced algorithms analyze geological data to predict potential 
              rockfall events before they occur.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-risk-low" />
              Safety First
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Prioritizing worker safety through early warning systems and 
              proactive risk mitigation strategies.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-accent" />
              Real-time Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Continuous monitoring of slope conditions with instant alerts 
              for changing risk levels.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Capabilities */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Current Capabilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Data Processing</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• CSV file upload and parsing</li>
                <li>• Geological parameter analysis</li>
                <li>• Risk level classification (Low, Medium, High)</li>
                <li>• Probability calculation for rockfall events</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Visualization</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interactive dashboards and charts</li>
                <li>• Risk trend analysis over time</li>
                <li>• Comprehensive reporting system</li>
                <li>• Visual risk distribution mapping</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Development */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Future Development
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground">
            The next phase of development will focus on integrating advanced machine learning 
            models trained on extensive geological datasets. This will enable:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Enhanced Prediction</h4>
              <p className="text-sm text-muted-foreground">
                More accurate risk assessments using neural networks and 
                ensemble learning methods.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">IoT Integration</h4>
              <p className="text-sm text-muted-foreground">
                Real-time sensor data integration for continuous monitoring 
                and immediate alert systems.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;