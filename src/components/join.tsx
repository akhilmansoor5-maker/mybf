import { Mail, MapPin, Phone } from "lucide-react";
import { JoinForm } from "@/components/join-form";
import { Reveal } from "@/components/reveal";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { site } from "@/lib/site";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: site.phoneDisplay,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: site.location,
    href: null,
  },
];

export function Join() {
  return (
    <section id="join" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,175,117,0.18),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">Become Part of the Movement</span>
            <h2 className="section-title">
              Start your entrepreneurial journey with{" "}
              <span className="text-accent-400">MYBF</span>
            </h2>
            <p className="section-lead">
              Whether you are building your first business, growing an existing venture, exploring a
              new idea or simply looking to connect with like-minded entrepreneurs, MYBF provides
              the community, knowledge and opportunities to help you move forward.
            </p>
            <p className="text-base leading-relaxed text-cloud-300">
              Together, let&apos;s shape the future of entrepreneurship in Malappuram.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium tracking-[0.14em] text-cloud-400 uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="-my-2.5 inline-block py-2.5 font-medium text-white transition-colors hover:text-accent-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MYBF on Instagram (${site.instagramHandle})`}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-cloud-200 transition-colors hover:border-accent-600/50 hover:bg-accent-600/10 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MYBF on Facebook (${site.facebookHandle})`}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-cloud-200 transition-colors hover:border-accent-600/50 hover:bg-accent-600/10 hover:text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="surface-card p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-xl font-bold text-white">Request to join</h3>
            <p className="mt-2 mb-7 text-sm leading-relaxed text-cloud-300">
              Share a few details and the MYBF team will get back to you about membership and
              upcoming gatherings.
            </p>
            <JoinForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
