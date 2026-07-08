import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Icon from "./Icon";
import {
	homepageCopy,
	type SiteLocale,
} from "../siteContent";

const phoneDisplay = "+33 6 58 92 87 52";
const whatsappHref = `https://wa.me/33658928752?text=${encodeURIComponent("Hi, I have a product idea or business workflow I want to build.")}`;
const tribeHref = "https://chat.whatsapp.com/JENTh7jL87qEF8layXTVWA?mode=gi_t";

const sectionReveal = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55 },
} as const;

const cardReveal = (delay = 0) => ({
	initial: { opacity: 0, y: 20, scale: 0.985 },
	whileInView: { opacity: 1, y: 0, scale: 1 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.5, delay },
});

const seenOn = [
	{ name: "TVM Malta", src: "/logos/tvm.webp" },
	{ name: "France.tv", src: "/logos/france-tv.svg" },
	{ name: "French Touch Malta", src: "/logos/french-touch-malta.png" },
	{ name: "CoCoHub", src: "/logos/cocohub.svg" },
	{ name: "Flowr Agency", src: "/logos/flowr-agency.png" },
];

const pressMentions = [
	["Digital nomad economy", "Podcast interview", "https://www.youtube.com/watch?v=aUAI-MXfwLM"],
	["Malta ecosystem", "Ecosystem conversation", "https://www.youtube.com/watch?v=EgFaogkqjZE"],
	["Remote work policy", "Work policy panel", "https://www.youtube.com/watch?v=PXLZGw0Z1-s"],
	["TV / press interview", "Broadcast appearance", "https://www.youtube.com/watch?v=NpXw1Z_Ra_g"],
	["Community building", "Community talk", "https://www.youtube.com/watch?v=YJ-v5beLHig"],
	["Entrepreneurship in Malta", "Founder interview", "https://www.youtube.com/watch?v=rF_vLRAPfss"],
];

const portfolioTitle: Record<SiteLocale, string> = {
	en: "Our last projects",
	fr: "Nos derniers projets",
	it: "I nostri ultimi progetti",
};

const heroHeadlineContent: Record<SiteLocale, { lead: string; accent: string; rest: string }> = {
	en: { lead: "We build", accent: "tools that fit", rest: "your business. Not the other way around." },
	fr: { lead: "On construit", accent: "les outils adaptes", rest: "a votre business. Pas l'inverse." },
	it: { lead: "Costruiamo", accent: "strumenti adatti", rest: "al tuo business. Non il contrario." },
};

const fitCardTitles: Record<SiteLocale, { yes: string; no: string }> = {
	en: { yes: "Strong fit", no: "Not a fit" },
	fr: { yes: "Bon fit", no: "Pas un fit" },
	it: { yes: "Buon fit", no: "Non adatto" },
};

const testimonials = [
	{
		quote:
			"Loic a cree mon CRM et mon site internet. Excellente collaboration. Les produits que Loic a développé pour nous fonctionne parfaitement.",
		name: "Thierry Martino",
		role: "Designer / Owner at SoulFetish · A-Meego client",
		logos: [
			{ name: "SoulFetish", src: "/logos/soulfetish.png", tone: "light" },
			{ name: "A-Meego", src: "/logos/a-meego.png", tone: "dark" },
		],
		youtubeId: null,
	},
	{
		quote:
			"Loic is a secret weapon in web dev.",
		name: "Teri Yu",
		role: "Product @ OpenAI · Ex Vibely",
		logos: [
			{ name: "OpenAI", src: "/logos/openai.svg", tone: "light" },
			{ name: "Kajabi", src: "/logos/kajabi.svg", tone: "light" },
		],
		youtubeId: null,
	},
	{
		quote:
			"Très à l'écoute, produisant un travail de qualité, soigné et dans les délais impartis à chaque mission.",
		name: "Manuel Rohaut",
		role: "Client recommendation",
		logos: [],
		youtubeId: null,
	},
	{
		quote: "Luc Thilliez talks about his experience working with Flowr Agency.",
		name: "Luc Thilliez",
		role: "Client · Flowr Agency",
		logos: [{ name: "Flowr Agency", src: "/logos/flowr-agency.png", tone: "light" }],
		youtubeId: "1DJwVajzCbo",
	},
	{
		quote: "Amin Lams shares his experience working with the agency.",
		name: "Amin Lams",
		role: "Client · Flowr Agency",
		logos: [{ name: "Flowr Agency", src: "/logos/flowr-agency.png", tone: "light" }],
		youtubeId: "_x4FIFXLMwE",
	},
	{
		quote:
			"Digital nomads and entrepreneurship in Malta — interview with Daniel Goebel.",
		name: "Daniel Goebel",
		role: "Interview · AIBC World",
		logos: [{ name: "AIBC World", src: "/logos/aibc.png", tone: "dark" }],
		youtubeId: "rF_vLRAPfss",
	},
];

const socialLinks = [
	["YouTube", "https://www.youtube.com/@lmoncany", "yt"],
	["LinkedIn", "https://www.linkedin.com/in/lmoncany/", "li"],
	["X", "https://x.com/lmoncany", "x"],
	["GitHub", "https://github.com/lmoncany", "gh"],
];

const finalPanelCopy: Record<SiteLocale, { joinPrefix: string; note: string }> = {
	en: {
		joinPrefix: "Join the",
		note: "No form, no funnel. Message me directly, or join the community if you want to stay close to the AI builders/operators circle.",
	},
	fr: {
		joinPrefix: "Rejoindre",
		note: "Pas de formulaire, pas de tunnel. Écrivez-moi directement, ou rejoignez la communauté pour rester proche des builders et opérateurs IA.",
	},
	it: {
		joinPrefix: "Entra nella",
		note: "Nessun form, nessun funnel. Scrivimi direttamente, oppure entra nella community se vuoi restare vicino a builder e operatori AI.",
	},
};

interface Props {
	locale: SiteLocale;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
	return <p className="poc-kicker">{children}</p>;
}

function WhatsappGlyph({ className = "h-5 w-5" }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.15c-.23.64-1.36 1.22-1.86 1.29-.48.07-1.1.1-1.77-.11-.41-.13-.93-.3-1.61-.59-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03 1-2.34.23-.24.52-.3.7-.3.17 0 .35.002.5.01.17.007.39-.065.61.47.23.55.77 1.88.84 2.02.07.14.12.3.02.48-.09.19-.14.3-.28.46-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.17.28.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.17-.19.7-.82.89-1.1.18-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.2.54.32.07.11.07.65-.16 1.29z" />
		</svg>
	);
}

function Cta({ label, compact = false }: { label: string; compact?: boolean }) {
	return (
		<a
			href={whatsappHref}
			target="_blank"
			rel="noreferrer"
			className={`poc-cta ${compact ? "poc-cta--compact" : ""}`}
		>
			<span className="poc-cta__icon">
				<WhatsappGlyph className="h-5 w-5" />
			</span>
			<span>{label}</span>
		</a>
	);
}

export default function PocHomepage({ locale }: Props) {
	const c = homepageCopy[locale];
	const finalCopy = finalPanelCopy[locale];
	const heroHeadline = heroHeadlineContent[locale];
	const fitTitles = fitCardTitles[locale];
	const [trustQuote, trustAttribution = ""] = c.trustLabel.split(" — ");
	const heroRef = useRef<HTMLElement | null>(null);
	const prefersReducedMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const { scrollYProgress: heroScrollProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const heroGridY = useTransform(
		heroScrollProgress,
		[0, 1],
		prefersReducedMotion ? [0, 0] : [0, 120],
	);
	const heroGlowY = useTransform(
		heroScrollProgress,
		[0, 1],
		prefersReducedMotion ? [0, 0] : [0, -80],
	);
	const heroContentY = useTransform(
		heroScrollProgress,
		[0, 1],
		prefersReducedMotion ? [0, 0] : [0, 36],
	);
	const heroContentOpacity = useTransform(
		heroScrollProgress,
		[0, 1],
		prefersReducedMotion ? [1, 1] : [1, 0.7],
	);

	return (
		<main>
			<motion.div
				className="poc-scroll-progress"
				style={{ scaleX: scrollYProgress }}
				aria-hidden="true"
			/>
			<section className="poc-hero" ref={heroRef}>
				<motion.div className="poc-hero__grid" style={{ y: heroGridY }} />
				<motion.div className="poc-hero__glow poc-hero__glow--one" style={{ y: heroGlowY }} aria-hidden="true" />
				<motion.div className="poc-hero__glow poc-hero__glow--two" style={{ y: heroContentY }} aria-hidden="true" />
				<div className="poc-hero__mesh" aria-hidden="true" />
				<span className="poc-hero__bleed" aria-hidden="true">
					30
				</span>
				<div className="poc-shell poc-hero__inner">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						style={{ y: heroContentY, opacity: heroContentOpacity }}
					>
						<div className="poc-offer-chip">
							<span className="poc-offer-chip__dot" />
							{c.chip}
						</div>
						<h1 className="poc-hero__headline">
							<span className="poc-hero__headline-line">
								{heroHeadline.lead} <span className="poc-hero__headline-accent">{heroHeadline.accent}</span>
							</span>
							<br />
							<span className="poc-hero__headline-rest">{heroHeadline.rest}</span>
						</h1>
						<p className="poc-hero__sub">
							{c.sub}
							<strong>{c.subHighlight}</strong>.
						</p>
						<motion.div
							className="poc-hero__proof"
							initial="initial"
							whileInView="whileInView"
							viewport={{ once: true, amount: 0.8 }}
							variants={{ whileInView: { transition: { staggerChildren: 0.08 } } }}
						>
							{c.proof.map((item) => (
								<motion.span key={item} variants={cardReveal()}>
									<Icon name="check" className="h-4 w-4" />
									{item}
								</motion.span>
							))}
						</motion.div>
						<div className="poc-hero__action">
							<Cta label={c.formSubmit} />
							<p>{c.actionNote}</p>
						</div>
						<div className="poc-hero__seen-marquee" aria-label={c.seenOnLabel}>
							<p>{c.seenOnLabel}</p>
							<div className="poc-marquee">
								<div className="poc-marquee__track">
									{[...seenOn, ...seenOn, ...seenOn].map((item, i) => (
										<span
											className="poc-marquee__item"
											key={`${item.name}-${i}`}
										>
											<img src={item.src} alt={item.name} loading="lazy" />
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="poc-hero__trust">
							<blockquote>{trustQuote}</blockquote>
							{trustAttribution ? <p>— {trustAttribution}</p> : null}
						</div>
					</motion.div>
				</div>
			</section>

			<section id="portfolio" className="poc-section poc-case-section poc-section--pattern">
				<div className="poc-shell">
					<motion.div className="poc-case-section__intro" {...sectionReveal}>
						<SectionLabel>{c.s06kicker}</SectionLabel>
						<h2>{portfolioTitle[locale]}</h2>
					</motion.div>
					<motion.article
						className="poc-case-study poc-case-study--primary"
						{...cardReveal()}
						whileHover={prefersReducedMotion ? undefined : { y: -6 }}
					>
						<div>
							<p className="poc-case-study__eyebrow">{c.case1eyebrow}</p>
							<h2>
								{c.case1h2Lead} <span>{c.case1h2Accent}</span>
							</h2>
							<p>{c.case1body}</p>
							<a href="https://a-meego.com" target="_blank" rel="noreferrer">
								{c.case1cta} <Icon name="external" className="h-4 w-4" />
							</a>
						</div>
						<figure className="poc-case-study__shot">
							<img
								src="/images/a-meego-screenshot.png"
								alt="A-Meego website screenshot"
							/>
						</figure>
					</motion.article>
					<motion.article
						className="poc-case-study poc-case-study--secondary"
						{...cardReveal(0.08)}
						whileHover={prefersReducedMotion ? undefined : { y: -6 }}
					>
						<div>
							<p className="poc-case-study__eyebrow">{c.case2eyebrow}</p>
							<h2>
								{c.case2h2Lead} <span>{c.case2h2Accent}</span>
							</h2>
							<p>{c.case2body}</p>
							<a href="https://mixologiq.com" target="_blank" rel="noreferrer">
								{c.case2cta} <Icon name="external" className="h-4 w-4" />
							</a>
						</div>
						<figure className="poc-case-study__shot">
							<img
								src="/images/mixologiq-screenshot.png"
								alt="Mixologiq website screenshot"
							/>
						</figure>
					</motion.article>
				</div>
			</section>

			{/*	<section className="poc-featured-video-section">
				<div className="poc-shell">
					<p className="poc-kicker">{c.videoKicker}</p>
					<div className="poc-featured-video__player">
						<div className="poc-featured-video__placeholder">
							<svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
								<circle cx="40" cy="40" r="40" fill="rgba(240,90,0,0.1)" />
								<circle cx="40" cy="40" r="30" fill="rgba(240,90,0,0.15)" />
								<path d="M33 27l22 13-22 13V27z" fill="#F05A00" />
							</svg>
							<p>{c.videoPlaceholder}</p>
							<span>{c.videoPlaceholderSub}</span>
						</div>
					</div>
				</div>
			</section>  */}

			<section className="poc-section poc-problem">
				<div className="poc-shell poc-split">
					<motion.div {...sectionReveal}>
						<SectionLabel>{c.s01kicker}</SectionLabel>
						<h2>
							{c.s01h2Lead} <span>{c.s01h2Accent}</span>
						</h2>
					</motion.div>
					<motion.div className="poc-copy" {...cardReveal(0.08)}>
						{c.s01body.map((para, i) => (
							<p key={i}>{para}</p>
						))}
						<p className="poc-copy__statement">{c.s01statement}</p>
					</motion.div>
				</div>
			</section>

			<section className="poc-section poc-operating poc-section--pattern">
				<div className="poc-shell">
					<motion.div {...sectionReveal}>
						<SectionLabel>{c.s02kicker}</SectionLabel>
					</motion.div>
					<div className="poc-heading-row">
						<h2>
							{c.s02h2Lead} <span>{c.s02h2Accent}</span>
						</h2>
						<p>{c.s02sub}</p>
					</div>
					<div className="poc-operating__grid">
						{c.operatingPrinciples.map(([title, body], index) => (
							<motion.article
								key={title}
								{...cardReveal(index * 0.05)}
								whileHover={prefersReducedMotion ? undefined : { y: -4 }}
							>
								<h3>{title}</h3>
								<p>{body}</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section id="how-it-works" className="poc-section poc-process poc-section--pattern poc-section--pattern-strong">
				<div className="poc-shell">
					<SectionLabel>{c.s03kicker}</SectionLabel>
					<div className="poc-heading-row">
						<h2>
							{c.s03h2Lead} <span>{c.s03h2Accent}</span>
						</h2>
						<p>{c.s03sub}</p>
					</div>
					<div className="poc-process__grid poc-process__grid--four">
						{c.process.map(([period, title, body, marker], index) => (
							<motion.article
								className="poc-process__card"
								key={title}
								{...cardReveal(index * 0.06)}
								whileHover={prefersReducedMotion ? undefined : { y: -6 }}
							>
								<div className="poc-process__number">0{index + 1}</div>
								<p>{period}</p>
								<h3>{title}</h3>
								<span>{marker}</span>
								<div className="poc-process__line" />
								<p className="poc-process__body">{body}</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section id="offers" className="poc-section poc-offers poc-section--pattern poc-section--pattern-dark">
				<div className="poc-shell">
					<SectionLabel>{c.s04kicker}</SectionLabel>
					<div className="poc-heading-row">
						<h2>
							{c.s04h2Lead} <span>{c.s04h2Accent}</span>
						</h2>
						<p>{c.s04sub}</p>
					</div>
					<div className="poc-offer-grid">
						{c.offers.map(
							([slug, name, label, body, points, note]) => (
								<motion.article
									id={slug}
									className="poc-offer-card"
									key={name}
									{...cardReveal(0.05)}
									whileHover={prefersReducedMotion ? undefined : { y: -8 }}
								>
									<p className="poc-offer-card__tag">{label}</p>
									<h3>{name}</h3>
									<p>{body}</p>
									<div>
										{points.map((point) => (
											<span key={point}>
												<Icon name="check" className="h-4 w-4" />
												{point}
											</span>
										))}
									</div>
									<small>{note}</small>
									<Cta label={c.formSubmit} compact />
								</motion.article>
							),
						)}
					</div>
				</div>
			</section>

			<section className="poc-section poc-compare">
				<div className="poc-shell">
					<SectionLabel>{c.s05kicker}</SectionLabel>
					<h2>
						{c.s05h2Lead} <span>{c.s05h2Accent}</span>
					</h2>
					<div
						className="poc-comparison-table"
						role="table"
						aria-label="Offer comparison"
					>
						<div role="row">
							{c.comparisonHeaders.map((h, i) => (
								<strong key={i}>{h}</strong>
							))}
						</div>
						{c.comparison.map((row) => (
							<div role="row" key={row[0]}>
								{row.map((cell, index) =>
									index === 0 ? (
										<strong key={`${row[0]}-${index}`}>{cell}</strong>
									) : (
										<span
											data-label={c.comparisonHeaders[index]}
											key={`${row[0]}-${index}`}
										>
											{cell}
										</span>
									),
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="poc-section poc-fit">
				<div className="poc-shell">
					<SectionLabel>{c.s07kicker}</SectionLabel>
					<h2>
						{c.s07h2Lead} <span>{c.s07h2Accent}</span>
					</h2>
					<div className="poc-fit__grid">
						<motion.div className="poc-fit__yes" {...cardReveal()}>
							<p className="poc-fit__card-title">{fitTitles.yes}</p>
							{c.fit.map((item) => (
								<div key={item}>
									<Icon name="check" className="h-5 w-5" />
									<p>{item}</p>
								</div>
							))}
						</motion.div>
						<motion.div className="poc-fit__no" {...cardReveal(0.08)}>
							<p className="poc-fit__card-title">{fitTitles.no}</p>
							{c.notFit.map((item) => (
								<div key={item}>
									<span>×</span>
									<p>{item}</p>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			<section className="poc-section poc-testimonials poc-section--pattern">
				<div className="poc-shell">
					<SectionLabel>{c.s08kicker}</SectionLabel>
					<h2>
						{c.s08h2Lead} <span>{c.s08h2Accent}</span>
					</h2>
					<div className="poc-testimonial-grid">
						{testimonials.map((t, index) => (
							<motion.figure
								key={t.name}
								className={t.youtubeId ? "poc-testimonial-card--video" : ""}
								{...cardReveal(index * 0.04)}
								whileHover={prefersReducedMotion ? undefined : { y: -5 }}
							>
								{t.youtubeId ? (
									<div className="poc-testimonial-video">
										<iframe
											title={t.name}
											src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`}
											loading="lazy"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								) : null}
								<blockquote>"{t.quote}"</blockquote>
								{t.logos.length ? (
									<div className="poc-testimonial-logos" aria-label={`${t.name} company logos`}>
										{t.logos.map((logo) => (
											<span className={`poc-testimonial-logo poc-testimonial-logo--${logo.tone}`} key={logo.name}>
												<img src={logo.src} alt={logo.name} loading="lazy" />
											</span>
										))}
									</div>
								) : null}
								<figcaption>
									<strong>{t.name}</strong>
									<span>{t.role}</span>
								</figcaption>
							</motion.figure>
						))}
					</div>
				</div>
			</section>

			<section className="poc-section poc-video-proof">
				<div className="poc-shell">
					<SectionLabel>{c.s09kicker}</SectionLabel>
					<div className="poc-heading-row">
						<h2>
							{c.s09h2Lead} <span>{c.s09h2Accent}</span>
						</h2>
						<p>{c.s09sub}</p>
					</div>
					<div className="poc-video-proof__featured">
						{c.featuredVideos.map((video, index) => (
							<motion.article
								key={video.youtubeId}
								{...cardReveal(index * 0.06)}
								whileHover={prefersReducedMotion ? undefined : { y: -5 }}
							>
								<div className="poc-video-frame">
									<iframe
										title={video.title}
										src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
										loading="lazy"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									/>
								</div>
								<p>{video.meta}</p>
								<h3>{video.title}</h3>
							</motion.article>
						))}
					</div>
					<div className="poc-video-proof__more">
						{c.moreVideos.map(([title, meta, href], index) => (
							<motion.a
								href={href}
								target="_blank"
								rel="noreferrer"
								key={href}
								{...cardReveal(index * 0.04)}
								whileHover={prefersReducedMotion ? undefined : { y: -4 }}
							>
								<span>{meta}</span>
								<strong>{title}</strong>
								<Icon name="external" className="h-4 w-4" />
							</motion.a>
						))}
					</div>
					<div className="poc-social-strip" aria-label="Social links">
						<p>{c.moreSignal}</p>
						{socialLinks.map(([label, href, id]) => (
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								key={href}
								className={`poc-social-${id}`}
							>
								{label}
								<Icon name="external" className="h-3 w-3" />
							</a>
						))}
					</div>
				</div>
			</section>

			<section className="poc-section poc-press poc-section--pattern">
				<div className="poc-shell poc-split">
					<motion.div className="poc-press__intro" {...sectionReveal}>
						<SectionLabel>{c.s10kicker}</SectionLabel>
						<h2>
							{c.s10h2Lead} <span>{c.s10h2Accent}</span>
						</h2>
						<p className="poc-press__lead">{c.s10press}</p>
						<div className="poc-press__metrics" aria-hidden="true">
							<div>
								<strong>Media</strong>
								<span>TV, podcasts, panels</span>
							</div>
							<div>
								<strong>Context</strong>
								<span>Operators, founders, remote work</span>
							</div>
						</div>
					</motion.div>
					<div className="poc-press__grid">
						{pressMentions.map(([title, meta, href], index) => (
							<motion.a
								href={href}
								target="_blank"
								rel="noreferrer"
								key={href}
								{...cardReveal(index * 0.05)}
							>
								<small>{meta}</small>
								<span>{title}</span>
								<Icon name="external" className="h-4 w-4" />
							</motion.a>
						))}
					</div>
				</div>
			</section>

			<section className="poc-section poc-faq">
				<div className="poc-shell poc-split">
					<div>
						<SectionLabel>{c.s11kicker}</SectionLabel>
						<h2>
							{c.s11h2Lead}
							<br />
							<span>{c.s11h2Accent}</span>
						</h2>
					</div>
					<div className="poc-faq__list">
						{c.faqs.map(([question, answer], index) => (
							<details key={question} open={index === 0}>
								<summary>
									{question}
									<span>+</span>
								</summary>
								<p>{answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<section id="brief" className="poc-section poc-brief">
				<div className="poc-shell poc-brief__grid">
					<div>
						<SectionLabel>{c.briefKicker}</SectionLabel>
						<h2>
							{c.briefH2Lead} <span>{c.briefH2Accent}</span>
						</h2>
						<p>{c.briefIntro}</p>
					</div>
					<div className="poc-whatsapp-panel">
						<a className="poc-whatsapp-panel__primary" href={whatsappHref} target="_blank" rel="noreferrer">
							<span>{c.formSubmit}</span>
							<strong>{c.whatsappLabel} {phoneDisplay}</strong>
							<WhatsappGlyph className="h-6 w-6" />
						</a>
						<a className="poc-whatsapp-panel__secondary" href={tribeHref} target="_blank" rel="noreferrer">
							<span>{finalCopy.joinPrefix}</span>
							<strong>AI Tribe</strong>
							<Icon name="external" className="h-5 w-5" />
						</a>
						<p>{finalCopy.note}</p>
					</div>
				</div>
			</section>
		</main>
	);
}
