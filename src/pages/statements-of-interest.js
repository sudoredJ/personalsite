import Head from 'next/head';

export default function StatementOfInterest() {
  const linkStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#000',
    textDecoration: 'none',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    padding: '20px',
  };

  const responseStyle = {
    color: '#000',
    textAlign: 'left',
    maxWidth: '800px',
    margin: '20px',
  };

  return (
    <>
      <Head>
        <title>Statement of Interest</title>
      </Head>
      <div style={containerStyle}>
        <a href="/" style={linkStyle}>Go back to home</a>
        <h1 style={{ color: '#000' }}>Statement of Interests (WIP: Zoom in/out if not working)</h1>
        <div style={responseStyle}>
          <h2>Project Manager</h2>
          <p>
            A day-in-the-life of an entry-level worker in the field of Project Management is a dynamic journey through the heart of technological advancements and organizational coordination. It begins with meticulously planning and organizing project tasks, setting clear objectives, and developing detailed project timelines. These are not mere plans but roadmaps that guide the team towards a common goal. As the day unfolds, a Project Manager engages in continuous communication with team members, stakeholders, and clients. They are adept at facilitating discussions, solving problems, and ensuring everyone stays on the same page.
          </p>
          <p>
            What intrigues me about this field is its fast-paced and multi-faceted nature. Project Management in the tech industry demands not only technical proficiency but also effective communication and interpersonal skills. The prospect of orchestrating a team's efforts to achieve project success while managing various aspects of a project's lifecycle is exhilarating. The ever-evolving tech landscape keeps the role fresh and challenging, offering limitless opportunities for learning and professional growth.
          </p>
          <p>
            One key motivation this field offers is the tangible impact of successful project delivery. Witnessing an idea transform into a real-world solution through effective project management is immensely rewarding. The sense of accomplishment and the opportunity to contribute to the development of innovative products or services are powerful motivators.
          </p>
          <p>
            I believe I possess several strengths that align well with the demands of a Project Manager role. Firstly, my ability to communicate effectively enables me to convey complex technical concepts to non-technical team members and stakeholders, fostering a collaborative atmosphere. Additionally, I am a quick thinker, capable of making informed decisions under pressure, a vital skill in managing project timelines and resources efficiently. My extroverted nature allows me to connect with team members and stakeholders, fostering a positive and productive work environment. Furthermore, my coding skills provide a solid technical foundation that can aid in understanding and troubleshooting technical aspects of projects.
          </p>
          <p>
            However, I am aware of certain gaps in my skillset that could potentially hinder my success in this field. While I have a foundation in coding, there's room for improvement, particularly in more specialized areas. Closing this gap by enhancing my technical skills will enable me to contribute more comprehensively to tech-focused projects. Additionally, continuous refinement of my problem-solving approach is essential, as project management often involves navigating unforeseen challenges.
          </p>
        </div>
        <div style={responseStyle}>
          <h2>Scroll down for second Field of Interest:</h2>
        </div>
      </div>
      <div style={containerStyle}>
        <a href="/" style={linkStyle}>Go back to home</a>
        <h1 style={{ color: '#000' }}>Statement of Interest</h1>
        <div style={responseStyle}>
          <h2>Account Manager</h2>
          {/* Your Project Manager response goes here */}
        </div>
        <div style={responseStyle}>
          <h2>Account Manager</h2>
          <p>
            In the world of Account Management, a typical day begins with a focus on client relationships. Entry-level Account Managers are responsible for maintaining and nurturing these relationships. This often involves checking in with clients, understanding their needs and goals, and ensuring that any issues are promptly addressed. As the day progresses, they work closely with various departments within the company to coordinate the delivery of products or services to clients. This includes collaborating with sales teams, project managers, and support teams to ensure seamless communication and execution.
          </p>
          <p>
            What draws me to the field of Account Management is the opportunity to be at the forefront of client interactions. I find it fascinating to be the bridge between clients and the company, ensuring that client expectations are not only met but exceeded. The variety of clients and industries that Account Managers work with provides a diverse and ever-evolving set of challenges and opportunities, making every day unique.
          </p>
          <p>
            Account Management offers a dynamic environment where success is directly tied to the strength of client relationships. This constant interaction and the ability to contribute to client satisfaction are motivating factors. Additionally, the field provides opportunities for professional growth, as the skills developed as an Account Manager, such as communication, problem-solving, and negotiation, are highly transferable and valuable in various career paths.
          </p>
          <p>
            I possess strong interpersonal and communication skills, which are essential for building and maintaining client relationships. Additionally, my attention to detail ensures that I can manage the intricacies of client accounts effectively. My ability to empathize with clients and understand their unique needs allows me to tailor solutions to meet their expectations.
          </p>
          <p>
            While I have a solid foundation in client communication and relationship-building, I recognize the importance of expanding my knowledge in the industries I may work with as an Account Manager. Gaining industry-specific knowledge will enable me to provide more targeted and valuable solutions to clients. Additionally, I plan to enhance my negotiation skills, as this is a crucial aspect of successful Account Management. Engaging in negotiation workshops and seeking mentorship from experienced Account Managers will be part of my strategy to close this gap.
          </p>
        </div>
      </div>
    </>
  );
}
