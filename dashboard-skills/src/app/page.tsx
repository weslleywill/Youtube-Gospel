"use client";

import { useState, useMemo } from "react";
import {
  skills,
  categories,
  categoryIcons,
  categoryColors,
  type Skill,
  type SkillCategory,
  type SkillScope,
} from "@/data/skills";
import { pipelines, pipelineColors } from "@/data/pipelines";

function SkillCard({
  skill,
  isExpanded,
  onToggle,
}: {
  skill: Skill;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:border-orange-500/50 ${
        isExpanded
          ? "border-orange-500/60 bg-white/[0.03]"
          : "border-white/10 bg-white/[0.02]"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-semibold text-white">
              {skill.displayName}
            </h3>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                categoryColors[skill.category]
              }`}
            >
              {skill.category}
            </span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                skill.scope === "local"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
              }`}
            >
              {skill.scope === "local" ? "LOCAL" : "GLOBAL"}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            {skill.description}
          </p>
          <p className="text-[11px] text-gray-600 mt-1">
            Fonte: {skill.source}
          </p>
        </div>
        <div className="text-gray-500 text-lg shrink-0">
          {isExpanded ? "\u2212" : "+"}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4 border-t border-white/10 pt-4">
          <div>
            <h4 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
              Comandos ({skill.commands.length})
            </h4>
            <div className="space-y-1.5">
              {skill.commands.map((cmd, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/[0.03] rounded px-3 py-2"
                >
                  <code className="text-orange-300 text-xs font-mono whitespace-nowrap bg-orange-500/10 px-2 py-0.5 rounded shrink-0">
                    {cmd.command}
                  </code>
                  <span className="text-xs text-gray-400">
                    {cmd.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {skill.triggers.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Triggers
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skill.triggers.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-white/5 text-gray-400 px-2 py-0.5 rounded border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skill.dependencies.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-red-400/70 uppercase tracking-wider mb-2">
                Dependencias
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skill.dependencies.map((d, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PipelinesView() {
  const [expandedPipeline, setExpandedPipeline] = useState<string | null>(
    "reaproveitamento"
  );

  return (
    <div className="space-y-6">
      {pipelines.map((pipeline) => {
        const colors = pipelineColors[pipeline.id];
        const isOpen = expandedPipeline === pipeline.id;

        return (
          <div
            key={pipeline.id}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${colors.border} ${
              isOpen ? colors.bg : "bg-white/[0.01]"
            }`}
          >
            <div
              className="px-5 py-4 cursor-pointer flex items-center justify-between"
              onClick={() =>
                setExpandedPipeline(isOpen ? null : pipeline.id)
              }
            >
              <div>
                <h3 className={`text-lg font-bold ${colors.text}`}>
                  {pipeline.name}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {pipeline.description}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-600">
                  {pipeline.steps.length} etapas
                </span>
                <span className="text-gray-500">
                  {isOpen ? "\u2212" : "+"}
                </span>
              </div>
            </div>

            {isOpen && (
              <div className="px-5 pb-5">
                <div className="relative">
                  {pipeline.steps.map((step, idx) => (
                    <div key={step.id} className="relative flex gap-4">
                      {/* Vertical line */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${colors.accent} shrink-0 mt-1.5 ring-2 ring-[#0a0a0a]`}
                        />
                        {idx < pipeline.steps.length - 1 && (
                          <div
                            className={`w-0.5 flex-1 ${colors.accent} opacity-20`}
                          />
                        )}
                      </div>

                      {/* Step content */}
                      <div className="pb-6 flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-white">
                            {step.label}
                          </h4>
                          {step.folder && (
                            <code className="text-[10px] text-gray-600 bg-white/5 px-1.5 py-0.5 rounded font-mono">
                              {step.folder}
                            </code>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Skills used */}
                        <div className="mb-2">
                          <span className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">
                            Skills:
                          </span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {step.skills.map((s, i) => (
                              <span
                                key={i}
                                className={`text-[11px] px-2 py-0.5 rounded border font-mono ${
                                  s.startsWith("/")
                                    ? `${colors.bg} ${colors.text} ${colors.border}`
                                    : "bg-white/5 text-gray-400 border-white/10"
                                }`}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outputs */}
                        <div>
                          <span className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">
                            Output:
                          </span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {step.outputs.map((o, i) => (
                              <span
                                key={i}
                                className="text-[11px] bg-white/[0.03] text-gray-500 px-2 py-0.5 rounded"
                              >
                                {o}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"skills" | "pipelines">("skills");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategory | "all"
  >("all");
  const [selectedScope, setSelectedScope] = useState<SkillScope | "all">("all");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const q = search.toLowerCase();
      const matchesSearch =
        search === "" ||
        s.displayName.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.commands.some(
          (c) =>
            c.command.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q)
        ) ||
        s.triggers.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "all" || s.category === selectedCategory;

      const matchesScope =
        selectedScope === "all" || s.scope === selectedScope;

      return matchesSearch && matchesCategory && matchesScope;
    });
  }, [search, selectedCategory, selectedScope]);

  const stats = useMemo(() => {
    const local = skills.filter((s) => s.scope === "local").length;
    const global = skills.filter((s) => s.scope === "global").length;
    const totalCommands = skills.reduce(
      (acc, s) => acc + s.commands.length,
      0
    );
    const totalPipelines = pipelines.length;
    const totalSteps = pipelines.reduce((acc, p) => acc + p.steps.length, 0);
    return { total: skills.length, local, global, totalCommands, totalPipelines, totalSteps };
  }, []);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Skill[]> = {};
    for (const s of filtered) {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    }
    return groups;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">
              06
            </div>
            <h1 className="text-xl font-bold">
              Skills Dashboard — Distribuicao & Monetizacao
            </h1>
          </div>
          <p className="text-sm text-gray-500 ml-11">
            Personal de Sucesso — Weslley Will
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: "Total Skills", value: stats.total, color: "text-white" },
            { label: "Locais", value: stats.local, color: "text-green-400" },
            { label: "Globais", value: stats.global, color: "text-violet-400" },
            { label: "Comandos", value: stats.totalCommands, color: "text-orange-400" },
            { label: "Pipelines", value: stats.totalPipelines, color: "text-cyan-400" },
            { label: "Etapas", value: stats.totalSteps, color: "text-amber-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3"
            >
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white/5 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "skills"
                ? "bg-orange-500/20 text-orange-400"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Skills & Comandos
          </button>
          <button
            onClick={() => setActiveTab("pipelines")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "pipelines"
                ? "bg-cyan-500/20 text-cyan-400"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Pipelines & Fluxos
          </button>
        </div>

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Buscar skill, comando ou trigger..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50"
              />
              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as SkillCategory | "all")
                }
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500/50 appearance-none"
              >
                <option value="all">Todas Categorias</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {categoryIcons[c]} {c}
                  </option>
                ))}
              </select>
              <select
                value={selectedScope}
                onChange={(e) =>
                  setSelectedScope(e.target.value as SkillScope | "all")
                }
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500/50 appearance-none"
              >
                <option value="all">Local + Global</option>
                <option value="local">Somente Local</option>
                <option value="global">Somente Global</option>
              </select>
            </div>

            <div className="text-xs text-gray-500">
              {filtered.length} de {stats.total} skills
              {search && ` \u2014 buscando "${search}"`}
            </div>

            <div className="space-y-8">
              {Object.entries(groupedByCategory).map(
                ([category, categorySkills]) => (
                  <div key={category}>
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>{categoryIcons[category as SkillCategory]}</span>
                      <span>{category}</span>
                      <span className="text-gray-600 font-normal">
                        ({categorySkills.length})
                      </span>
                    </h2>
                    <div className="space-y-2">
                      {categorySkills.map((skill) => (
                        <SkillCard
                          key={skill.id}
                          skill={skill}
                          isExpanded={expandedSkill === skill.id}
                          onToggle={() =>
                            setExpandedSkill(
                              expandedSkill === skill.id ? null : skill.id
                            )
                          }
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Nenhuma skill encontrada pra essa busca.
              </div>
            )}
          </>
        )}

        {/* Pipelines Tab */}
        {activeTab === "pipelines" && <PipelinesView />}

        <footer className="border-t border-white/10 pt-4 pb-8 text-center text-xs text-gray-600">
          Atualizado em 2026-04-13 — 06-distribuicao-e-monetizacao
        </footer>
      </div>
    </div>
  );
}
