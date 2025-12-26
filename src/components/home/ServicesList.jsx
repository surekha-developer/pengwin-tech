import styles from "../../styles/homeStyles/ServicesList.module.scss";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Digital Transformation",
    description: [
      "Seamlessly engage your customers through innovative digital solutions.",
      "We help businesses enhance efficiency, productivity, and operational performance.",
      "Our solutions improve customer experience with intuitive and scalable platforms.",
      "By leveraging modern technologies, we drive data-driven decision-making and innovation.",
      "We streamline processes, reduce costs, and eliminate inefficiencies.",
      "Our team ensures secure, reliable, and seamless digital adoption across your business.",
      "We align technology with your goals to create lasting business impact.",
      "Empowering organizations to stay competitive through continuous innovation is our mission.",
    ],
    image: "/digital.png",
  },
  {
    title: "Middleware Integrations",
    description: [
      "We help businesses seamlessly connect multiple software systems for smooth operations.",
      "Our solutions simplify complex workflows and reduce manual intervention.",
      "We integrate web applications, databases, and APIs for consistent performance.",
      "Real-time data synchronization enables faster decision-making.",
      "Our middleware solutions improve efficiency, reliability, and scalability.",
      "We ensure secure, seamless communication between all your digital platforms.",
    ],
    image: "/middlerbg.png",
  },
  {
    title: "Software Consulting",
    description: [
      "Analyze your current IT infrastructure and identify growth opportunities.",
      "Recommend technology strategies aligned with your business goals.",
      "Optimize software architecture for performance, security, and scalability.",
      "Provide expert guidance on cloud adoption and migration.",
      "Implement automation for streamlined operations and reduced costs.",
      "Help select the right tools, platforms, and frameworks for your projects.",
      "Offer ongoing support to ensure continuous improvement.",
      "Empower your team with actionable insights and technology best practices.",
    ],
    image: "/testingrbg.png",
  },
  {
    title: "Cloud Services",
    description: [
      "Deploy scalable cloud infrastructure tailored to your business needs.",
      "Ensure high availability and reliable performance for all applications.",
      "Enable secure data storage, backup, and disaster recovery solutions.",
      "Facilitate seamless migration from on-premises to cloud platforms.",
      "Optimize costs while maximizing computing efficiency.",
      "Support real-time collaboration and remote access for teams.",
    ],
    image: "/cloudrbg.png",
  },
  //...................
  {
      title: "Staff Augmentation",
      description: [
        "Flexible Staff Augmentation — providing skilled professionals on demand to strengthen your team and drive results.",
        "Flexible staffing solutions for projects.",
        "Quickly scale your team with skilled professionals.",
        "Access experts without long-term commitments.",
        "Fill temporary gaps efficiently.",
        "Enhance team productivity and performance.",
        "Reduce recruitment overhead and time.",
        "Support multiple projects simultaneously.",
        "Adapt to changing business requirements seamlessly.",
      ],
      image: "/selfAugmentation.png",
    },
    {
      title: "IoT Solutions and Services",
      description: [
        "IoT Solutions — paving the way for a connected future, your one-stop shop for smart, seamless IoT services.",
        "End-to-end IoT solutions for a connected future.",
        "Integrate devices and sensors across business ecosystems.",
        "Collect real-time data for actionable insights.",
        "Enhance operational efficiency through automation.",
        "Monitor and manage devices remotely.",
        "Ensure secure communication between IoT devices.",
        "Enable predictive maintenance and smart analytics.",
        "Scale IoT infrastructure as your business grows.",
      ],
      image: "/IOTrbg.png",
    },
    {
      title: "No Code / Low Code Implementations",
      description: [
        "No Code & Low Code Solutions — empowering rapid delivery by building efficient apps with minimal coding.",
        "Rapidly build applications with minimal coding.",
        "Accelerate project delivery and time-to-market.",
        "Empower business users and citizen developers.",
        "Reduce dependency on traditional developers.",
        "Customize workflows without heavy IT involvement.",
        "Automate repetitive tasks efficiently.",
        "Test and deploy applications faster.",
        "Focus on innovation instead of manual coding.",
      ],
      image: "/nocoderbg.png",
    },
];

export default function ServicesList() {
  return (
    <section className={styles.details}>
       
      <div className={styles.container}>
          <div className={styles.containertwo}>
        <h1>Our Services</h1>
        <p>
          We provide end-to-end digital solutions that help businesses grow,
          innovate, and succeed in the digital world.
        </p>
      </div>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
