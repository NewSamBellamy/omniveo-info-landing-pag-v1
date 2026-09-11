import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 antialiased">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-neutral-500">Last updated: September 10, 2026</p>
        
        <div className="prose prose-neutral mt-8">
          <p>
            OmniVeo is an open-source AI studio. We respect your privacy and collect as little data as possible.
          </p>
          
          <h3>Waitlist & Emails</h3>
          <p>
            When you join our waitlist, we collect your email address. We use this exclusively to notify you when our first open-source tools are ready for release, or to reply to direct inquiries you initiate. We do not sell your email, share it with third-party marketers, or use it for cross-site tracking. You can unsubscribe at any time using the link at the bottom of our emails.
          </p>
          
          <h3>Cookies & Tracking</h3>
          <p>
            We currently do not use aggressive third-party marketing cookies or tracking pixels. We may use privacy-respecting, anonymized analytics (like PostHog or Plausible) strictly to understand aggregate site performance and traffic sources. 
          </p>
          
          <h3>Open Source Promise</h3>
          <p>
            Our software will be open-source. We believe you should have control over your data. As we release products, their specific data-handling policies will be transparent and aligned with our core principle of creator independence.
          </p>

          <h3>Contact</h3>
          <p>
            For any questions about your data, email <a href="mailto:shannon@omniveo.info">shannon@omniveo.info</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
