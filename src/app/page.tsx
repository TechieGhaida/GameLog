"use client";

import Link from "next/link";
import { ArrowRight, Trophy, BarChart3, Users, Target, Calendar, Gamepad2, Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const playerCountRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const backgroundElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, descRef.current, paragraphRef.current, buttonsRef.current, playerCountRef.current], {
        opacity: 0,
        y: 30
      });

      gsap.set(characterRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -5
      });

      if (floatingElementsRef.current?.children) {
        gsap.set(Array.from(floatingElementsRef.current.children), {
          opacity: 0,
          scale: 0.5,
          y: -20
        });
      }

      if (backgroundElementsRef.current?.children) {
        gsap.set(Array.from(backgroundElementsRef.current.children), {
          opacity: 0,
          scale: 0.5
        });
      }

      // Create timeline
      const tl = gsap.timeline({ delay: 0.2 });

      // Animate title with glow effect
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(titleRef.current, {
            textShadow: "0 0 20px hsl(176 100% 50% / 0.8)",
            duration: 0.5,
            ease: "power2.inOut"
          });
        }
      })

      // Animate subtitle
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.8")

      // Animate description
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")

      // Animate paragraph
      .to(paragraphRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")

      // Animate buttons
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")

      // Animate player count
      .to(playerCountRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")

      // Animate character with rotation
      .to(characterRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.8)"
      }, "-=1.2")

      // Animate floating elements with stagger
      if (floatingElementsRef.current?.children) {
        tl.to(Array.from(floatingElementsRef.current.children), {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2
        }, "-=0.8");
      }

      // Animate background elements
      if (backgroundElementsRef.current?.children) {
        tl.to(Array.from(backgroundElementsRef.current.children), {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
        }, "-=1");
      }

      // Continuous floating animation for character
      gsap.to(characterRef.current, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2
      });

      // Continuous floating animation for floating elements
      if (floatingElementsRef.current?.children) {
        gsap.to(Array.from(floatingElementsRef.current.children), {
          y: -5,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.5,
          delay: 3
        });
      }

      // Continuous pulse animation for background elements
      if (backgroundElementsRef.current?.children) {
        gsap.to(Array.from(backgroundElementsRef.current.children), {
          scale: 1.2,
          opacity: 0.8,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.3,
          delay: 4
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="relative border-b border-cyan-500/20 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <span className="cyber-font text-2xl font-bold text-glow bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Lootra
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-foreground/80 hover:text-cyan-400 transition-colors">
                Features
              </Link>
              <Link href="#updates" className="text-foreground/80 hover:text-cyan-400 transition-colors">
                Updates
              </Link>
              <Link href="#community" className="text-foreground/80 hover:text-cyan-400 transition-colors">
                Community
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-foreground/80 hover:text-cyan-400 transition-colors">
                Sign In
              </Link>
              <button className="btn-glow px-6 py-2 rounded-full text-black font-semibold">
                Start Logging
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative hero-gradient hero-grid-bg pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="cyber-font text-glow bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Lootra
                </span>
              </h1>
              <p ref={subtitleRef} className="text-xl md:text-2xl text-cyan-400 mb-4 font-semibold">
                
              </p>
              <h2 ref={descRef} className="text-lg md:text-xl lg:text-2xl cyber-font font-bold text-foreground mb-4 leading-tight">
                Track Your Gaming Journey -
                <br />
                <span className="cyber-alt-font text-cyan-400">Keep the memory</span>
              </h2>
              <p ref={paragraphRef} className="text-base text-foreground/70 mb-12 max-w-2xl backdrop-blur-sm">
                Lootra is your all-in-one platform to track progress, achievements, and playtime across all games—build your gaming profile and stay on top of your journey.
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-glow px-8 py-4 rounded-full text-black font-bold text-lg">
                  Start Your Journey
                </button>

              </div>

              {/* Player Count */}
              <div ref={playerCountRef} className="mt-12 flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-background" />
                </div>
                <span className="text-cyan-400 font-semibold">
                  Join 15,000+ active gamers
                </span>
              </div>
            </div>

            {/* Right Content - Character Artwork */}
            <div className="relative flex justify-center lg:justify-end">
              <div ref={characterRef} className="relative">
                {/* Main Character */}
                <img
                  src="/images/pixelgun.gif"
                  alt="Pixel Art Mech Robot"
                  className="w-96 h-96 object-contain relative z-10"
                />

                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl" />

                {/* Floating UI Elements */}
                <div ref={floatingElementsRef}>
                  <div className="absolute -top-4 -right-4 glow-border p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="absolute bottom-8 -left-8 glow-border p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div ref={backgroundElementsRef} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-border p-6 rounded-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-background/50 border border-cyan-500/30 rounded-xl pl-6 pr-12 py-4 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-600/5 rounded-xl pointer-events-none" />
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group"
                onClick={() => {
                  // Add your search functionality here
                  console.log('Search clicked');
                }}
              >
                <Search className="h-5 w-5 text-cyan-400/70 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Popular This Week */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Popular This Week</h2>
            <a href="#" className="text-cyan-400 font-semibold hover:underline">See All</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {/* Game Cards */}
            {[
              {
                img: '/images/elden.jpg',
                title: 'Elden Ring',
                year: '2022',
                stars: 5
              },
              {
                img: '/images/Clair.webp',
                title: "Clair Obscur: Expedition 33",
                year: '2025',
                stars: 5
              },
              {
                img: '/images/dis.WEBP',
                title: 'Disco Elysium',
                year: '2019',
                stars: 5
              },
              {
                img: '/images/hollow.jpg',
                title: 'Hollow Knight',
                year: '2017',
                stars: 4
              },
              {
                img: '/images/gow.jpg',
                title: 'God of War Ragnarök',
                year: '2022',
                stars: 5
              },
              {
                img: '/images/cyb.WEBP',
                title: 'Cyberpunk 2077',
                year: '2020',
                stars: 5
              }
            ].map((game, idx) => (
              <div key={idx} className="glow-border rounded-2xl overflow-hidden flex flex-col bg-card">
                <div className="h-[300px] w-full bg-background/50">
                  <img src={game.img} alt={game.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{game.title}</h3>
                    <div className="text-foreground/60 text-sm mb-2">{game.year}</div>
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {'★★★★★'.slice(0, game.stars)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Reviews */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Recent Reviews</h2>
            <a href="#" className="text-cyan-400 font-semibold hover:underline">See All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review Cards */}
            {[
              {
                user: 'GamerX',
                date: 'May 15, 2025',
                avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=GamerX',
                gameImg: '/images/alice.jpg',
                gameTitle: 'Alice: Madness Returns',
                review: "A dark, stylish action-adventure that blends fast-paced combat with haunting visuals. Dive into a twisted Wonderland shaped by trauma, where every step unravels more of Alice's fractured psyche."
              },
              {
                user: 'RPGLover',
                date: 'May 14, 2025',
                avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=RPGLover',
                gameImg: '/images/mons.jpg',
                gameTitle: 'Monster Hunter Wilds',
                review: "An evolution of the series' epic hunts, set in a dynamic, living world. With seamless environments, smarter monsters, and deeper gameplay, Wilds pushes the thrill of the hunt to bold new heights."
              },
              {
                user: 'IndieDevFan',
                date: 'May 13, 2025',
                avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=IndieDevFan',
                gameImg: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
                gameTitle: 'Hades II',
                review: "Supergiant has done it again. Somehow they've managed to improve upon perfection with more varied combat, deeper storytelling, and even more memorable characters..."
              }
            ].map((review, idx) => (
              <div key={idx} className="glow-border p-6 rounded-xl flex flex-col bg-card">
                <div className="flex items-center mb-4">
                  <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-bold text-foreground">{review.user}</div>
                    <div className="text-foreground/60 text-xs">{review.date}</div>
                  </div>
                </div>
                <div className="h-32 w-full bg-background/50 rounded-lg overflow-hidden mb-3">
                  <img src={review.gameImg} alt={review.gameTitle} className="w-full h-full object-cover" />
                </div>
                <div className="font-semibold text-foreground mb-1">{review.gameTitle}</div>
                <div className="text-foreground/80 text-sm">{review.review}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Latest Updates</h2>

          <div className="space-y-4">
            <div className="glow-border p-6 rounded-xl flex items-center space-x-4">
              <img
                src="https://img.craftpix.net/2023/06/Free-Sci-Fi-Antagonists-Pixel-Character-Pack4-720x480.webp"
                alt="Update"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-cyan-400">
                  Update 2.1 - Enhanced Game Detection
                </h3>
                <p className="text-foreground/80 text-sm">
                  Improved automatic game detection, new achievement categories, and cross-platform sync improvements...
                </p>
              </div>
              <span className="text-cyan-400 text-sm">May 24, 2025</span>
            </div>

            <div className="glow-border p-6 rounded-xl flex items-center space-x-4">
              <img
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/69a2e98e-fd5c-455e-94a2-91489ea81365/0c964acc-165d-4664-a12e-c22154e2687d.png"
                alt="Update"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-cyan-400">
                  Update 2.0 - Social Features Launch
                </h3>
                <p className="text-foreground/80 text-sm">
                  Connect with friends, share achievements, and discover what your gaming community is playing...
                </p>
              </div>
              <span className="text-cyan-400 text-sm">May 10, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-border p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-cyan-400" />
              <h2 className="text-2xl font-bold text-foreground">Join Our Gaming Community</h2>
            </div>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest updates, feature announcements, and gaming insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-card border border-cyan-500/30 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-cyan-400"
              />
              <button className="btn-glow px-8 py-3 rounded-full text-black font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-card/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold text-cyan-400">Lootra</span>
              </div>
              <p className="text-foreground/60 text-sm">
                The ultimate platform for tracking your gaming journey and building your digital legacy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Platform</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Community</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Discord</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Reddit</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2025 Lootra. made by Ghaida.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
