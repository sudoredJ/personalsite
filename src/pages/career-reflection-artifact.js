import Head from 'next/head';
import Link from 'next/link';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center', // Center align text
};

const poemStyle = {
  maxWidth: '800px', // Set a max width for readability
  margin: '0 auto', // Center the poem container
  padding: '20px', // Add some padding
  fontSize: '1.2rem', // Adjust font size
  whiteSpace: 'pre-wrap', // Preserve whitespace and line breaks in the poem
};

export default function About() {
  return (
    <>
      <Head>
        <title>Career Reflection Artifact (Poem Option)</title>
      </Head>
      {/* Header */}
      <header className="pt-10 lg:pt-8">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Navigation content */}
          </nav>
        </div>
      </header>
      {/* Title Section */}
      <section className="pt-8 md:pt-28 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-12 gap-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium col-span-12 lg:col-span-8">Career Reflection Artifact (Poem Option)</h1>
        </div>
      </section>
      {/* Poem Content */}
      <section style={containerStyle}>
        <div style={poemStyle}>
          <p>In realms of youth, where dreams first took their flight,
A world so vast, with wonders to ignite.
With eyes wide open, gazing at the night,
I pondered life's deep secrets, out of sight.

To halls of learning, with a curious mind,
To Washington, I journeyed, dreams aligned.
A world of paths, where knowledge intertwined,
In streams of wisdom, endless truths I'd find.

In code and circuits, secrets to reveal,
In business realms, new paths began to peel.
A blend of arts, where logic held its zeal,
In creation's joy, my spirit would feel real.

Not just to learn, but to create, to lead,
In tech's vast realm, my visions would proceed.
In lines of code, my dreams would intercede,
A future bright, where I would plant my creed.

Scaling heights in business, tech's embrace,
Where dreams and data find their perfect place.
In this new world, I take my steady pace,
On destiny's broad, ever-changing space.

From youth's bright gaze to clarity of age,
A journey marked by time's unwavering stage.
From stars to silicon, a sage's page,
In every line, a rhythm, wisdom's sage.

In this new era, where we blend with tech,
Where business, innovation find their sketch,
I find my path, with goals that interject,
In digital domains, my mark to etch.

From college halls to life's expansive field,
With dreams in hand, to none shall I kneel.
In tech's wide world, my own fate I shall wield,
And build, and grow, with wisdom as my field.

Through circuits' maze and data's deep expanse,
I seek to give my dreams a fighting chance.
In algorithms' dance, a trance-like glance,
In tech's embrace, my aspirations prance.

In lecture halls where knowledge flows like streams,
I gather insights, fuel for future dreams.
With every byte and bit, my passion gleams,
In digital realms, my ambition teems.

With business acumen, sharp and keen,
I navigate the market's vast, unseen.
In every deal and venture, I convene,
A leader's poise, calm and serene.

In realms of code, where logic reigns supreme,
I craft my future, a technologist's dream.
With every line, a part of a grand scheme,
In software's world, I find my theme.

As networks spread and digital worlds expand,
I stand prepared, with skill at my command.
In virtual realms, I make my stand,
Creating, shaping, with a master's hand.

In the fusion of business and tech's might,
I find my calling, in this endless fight.
To innovate, to soar to greater height,
In tech's domain, my future's bright.

With every challenge, every hurdle crossed,
In tech's vast ocean, I am never lost.
With every victory, no matter the cost,
In business and tech, my dreams embossed.

In this journey from youth to wisdom's gate,
I forge my path, with destiny as my mate.
In realms of tech, where possibilities await,
I stride forward, to a future I create.</p>
        </div>
      </section>
      {/* Footer */}
      <footer className="pt-24 pb-8 bg-bg">
        <div className="container mx-auto px-4 relative grid grid-cols-12 gap-8">
          {/* Footer content */}
          <div style={containerStyle}>
            <Link href="/" style={{ ...containerStyle, color: '#3CA700' }}>Back to Home</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
