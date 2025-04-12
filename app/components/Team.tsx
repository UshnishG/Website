"use client";

import { useState } from "react";
import teamData from "../data/team.json";
import { Instagram, Linkedin } from "lucide-react";

const Team = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredTeam = teamData.team.filter((member) => {
    if (filter === "all") return true;
    if (filter === "core") return member.coreMember;
    return member.domain.toLowerCase() === filter.toLowerCase();
  });

  const domains = Array.from(new Set(teamData.team.map((member) => member.domain)));

  return (
    <section id="team" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("core")}
            className={`px-4 py-2 rounded-full ${
              filter === "core" ? "bg-primary text-primary-foreground" : "bg-secondary"
            }`}
          >
            Core Team
          </button>
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain.toLowerCase())}
              className={`px-4 py-2 rounded-full ${
                filter === domain.toLowerCase() ? "bg-primary text-primary-foreground" : "bg-secondary"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex gap-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;