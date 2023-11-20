import Head from 'next/head';
import Link from 'next/link';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const storyStyle = {
  maxWidth: '800px',
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

export default function CoreStories() {
  return (
    <>
      <Head>
        <title>My Core Stories</title>
      </Head>
      <div style={containerStyle}>
        <h1>Core Stories</h1>
        

        {/* Story 2: Solved a Business Problem */}
        <div style={storyStyle}>
          <h2>Solved a Business Problem</h2>
          <p>
            At RadiantAI, a startup where innovative solutions were crucial for growth and sustainability, I was confronted with a significant challenge regarding our email hosting services. The high costs were straining our limited budget, especially critical during our pursuit of a $2 million seed round. Recognizing the urgency, I took the initiative to explore alternative solutions, leading me to set up a custom DNS hosting using MXroute. This strategic move resulted in a remarkable 200% reduction in our email hosting expenses, significantly alleviating our financial burden. This experience was not only a testament to my technical acumen but also highlighted my ability to identify cost-saving measures and contribute substantially to the company's financial strategy and overall health.
          </p>
        </div>

        {/* Story 3: Took Initiative */}
        <div style={storyStyle}>
          <h2>Took Initiative to Do Something Without Being Told</h2>
          <p>
            My internship at ENTRE, a dynamic and fast-paced startup environment, presented me with the opportunity to take charge and demonstrate my initiative. I was tasked with building and scaling a Web3 finance/startup community. Recognizing the potential of social media in driving community engagement, I embarked on creating high-impact content using tools like Adobe Suite, DaVinci Resolve, and Kapwing. This proactive approach led to a staggering 515% increase in user engagement, significantly boosting the community's growth and visibility. Additionally, I optimized our marketing and cold-outreach strategies using Python and Apollo, developing effective automations that improved our lead generation by 45%. These accomplishments underscored my ability to independently identify areas of improvement, devise strategic solutions, and execute them effectively, driving substantial growth and engagement for the community.
          </p>
        </div>

        {/* Story 4: Worked with a Team */}
        <div style={storyStyle}>
          <h2>Worked with a Team</h2>
          <p>
            In my MGT100 course, I had the enriching experience of collaborating with a diverse team on a semester-long consulting project for Microsoft. Our task was to conceptualize and present a mock version of an app called "Microsoft School." This project required us to synergize our varied skills and perspectives to create an innovative and feasible app concept. We engaged in extensive brainstorming sessions, conducted thorough market research, and utilized our collective knowledge in technology and business strategy. The process involved regular team meetings, constructive feedback loops, and a shared commitment to excellence. Our final presentation was a testament to our collaborative efforts, showcasing a well-designed, user-friendly app concept that addressed key educational needs. This experience reinforced the value of teamwork, effective communication, and the power of diverse ideas in creating impactful solutions.
          </p>
        </div>
        {/* Story 1: Showed Leadership */}
        <div style={storyStyle}>
          <h2>Showed Leadership</h2>
          <p>
            During my first dan black belt test, a challenging and pivotal moment in my martial arts journey, I observed a younger participant struggling significantly with the rigorous cardio exercises. Recognizing the importance of teamwork and mutual support in such high-pressure situations, I made the decision to stand by him. Despite having successfully completed my own set, I voluntarily redid the exercises alongside him, offering words of encouragement and moral support. This gesture not only helped him overcome his hurdles but also instilled a spirit of unity and perseverance among all participants. It was a profound lesson in leadership for me, demonstrating that true leadership involves lifting others and fostering a supportive environment, especially under challenging circumstances.
          </p>
        </div>

        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}
