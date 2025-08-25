const articles = [
  {
    title: "How I Landed My Dream Nursing Job in Just Weeks",
    name: "Ama Boateng",
    role: "Registered Nurse",
    company: "Korle-Bu Teaching Hospital",
  },
  {
    title: "Why Relevant Opportunities Matter in Building a Healthcare Career",
    name: "Fatoumata Diallo",
    role: "Care Assistant",
    company: "Dakar Community Health Centre",
  },
  {
    title: "How Networking Opened New Career Doors in Healthcare",
    name: "Kwesi Mensah",
    role: "Home Care Manager",
    company: "Accra Wellness Home",
  },
  {
    title:
      "More Than a Job Site: Building a Support System for Healthcare Workers",
    name: "Josephine Kouadio",
    role: "Paediatric Nurse",
    company: "Abidjan Children’s Hospital",
  },
];

export default function LatestArticles() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="leading-tight mb-5">
          <h2 className="text-lg md:text-3xl font-bold">Latest Articles</h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Latest news, tips, and trends for healthcare professionals.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="w-full rounded-md border shadow-sm overflow-hidden flex flex-col h-40 md:h-80"
            >
              <div className="hidden md:inline h-full bg-gray-200"></div>
              <div className="h-full bg-white p-3 flex flex-col justify-between">
                <h4 className="md:text-lg font-medium line-clamp-4 leading-5">
                  {article.title}
                </h4>
                <div>
                  <h5 className="text-sm text-primary md:text-base font-semibold">
                    {article.name}
                  </h5>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {article.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
