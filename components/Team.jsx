import Image from 'next/image';

const teamData = [
  {
    src: '/images/kahve-kişi.jpg',
    name: 'Vercy Civil',
    title: 'Yardımcı Baş Şef',
    description:
      'Bir kahve kavurucu olarak, dünya çapında en iyi kahve çekirdeklerini yetiştiren çiftçilerle iş birliği yapıyoruz.',
  },
  {
    src: '/images/kahve-kisi-2.jpg',
    name: 'Yemini Smiler',
    title: 'Baş Şef',
    description:
      'Bir kahve kavurucu olarak, dünya çapında en iyi kahve çekirdeklerini yetiştiren çiftçilerle iş birliği yapıyoruz.',
  },
  {
    src: '/images/kahve-kisi-3.jpg',
    name: 'Khan  Smith',
    title: 'Yardımcı Baş Şef',
    description:
      'Bir kahve kavurucu olarak, dünya çapında en iyi kahve çekirdeklerini yetiştiren çiftçilerle iş birliği yapıyoruz.',
  },
];

const Team = () => {
  return (
    <section className="team container" id="team">
      <div className="heading">
        <h2>Uzmanlarımızla Tanışın</h2>
      </div>
      <div className="team-content">
        {teamData.map((member, index) => (
          <div key={index} className="team-box">
            <Image
              src={member.src}
              alt={member.name}
              width={400}
              height={400}
            />
            <h2>{member.name}</h2>
            <span>{member.title}</span>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
