import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { navLinks, site } from "@/lib/site";

export async function SiteFooter() {
  "use cache";

  // Baked in at build time so the copyright year stays prerenderable.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-5">
            <Logo className="h-14 w-auto" />
            <p className="max-w-sm text-sm leading-relaxed text-cloud-300">
              Malappuram Youth Business Forum — connecting entrepreneurs, creating opportunities and
              strengthening the district&apos;s entrepreneurial ecosystem.
            </p>
            <p className="text-xs leading-relaxed text-cloud-400">
              Supported by Mission Malappuram 2050.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-xs font-semibold tracking-[0.18em] text-cloud-400 uppercase">
              Explore
            </h2>
            <ul className="mt-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-cloud-200 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-semibold tracking-[0.18em] text-cloud-400 uppercase">
              Get in touch
            </h2>
            <ul className="mt-5 flex flex-col gap-1">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-11 items-center gap-2.5 text-sm text-cloud-200 transition-colors hover:text-accent-300"
                >
                  <Mail className="size-4 shrink-0 text-accent-400" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex min-h-11 items-center gap-2.5 text-sm text-cloud-200 transition-colors hover:text-accent-300"
                >
                  <Phone className="size-4 shrink-0 text-accent-400" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MYBF on Instagram (${site.instagramHandle})`}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-cloud-200 transition-colors hover:border-accent-600/50 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MYBF on Facebook (${site.facebookHandle})`}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-cloud-200 transition-colors hover:border-accent-600/50 hover:text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cloud-400">
            &copy; {year} {site.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-cloud-400">Connecting Entrepreneurs. Creating Opportunities.</p>
        </div>
      </div>
    </footer>
  );
}
