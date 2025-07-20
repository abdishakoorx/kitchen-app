import Link from "next/link";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Authentication Failed
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              We couldn&apos;t sign you in with Google. Please try again.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Alert variant={"destructive"}>
            <AlertCircle />
            <AlertTitle className="text-base font-semibold">
              What went wrong?
            </AlertTitle>
            <AlertDescription>
              The Google sign-in process was interrupted. Common causes include:
              <ul className="list-inside list-disc text-sm font-serif space-y-3 text-black mt-2">
                <li>Sign-in process was cancelled</li>
                <li>Network connection issues</li>
                <li>Google services temporarily unavailable</li>
                <li>Account permissions not granted</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-6">
          <Button
            asChild
            className="w-full h-11 font-medium bg-black hover:bg-black/70"
          >
            <Link href="/login">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="w-full h-11 bg-transparent"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Still having trouble?{" "}
              <Link
                href="/support"
                className="font-medium text-blue-600 hover:text-blue-700 underline underline-offset-2 transition-colors"
              >
                Get Help
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
