export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-muted-foreground">
          This is the about page. This page is protected by the global error boundary.
        </p>
        <p className="text-muted-foreground">
          Any error thrown on this page will automatically show the Error500 component.
        </p>
      </div>
    </div>
  );
}
