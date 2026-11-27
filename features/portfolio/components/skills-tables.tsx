import { CircleCheck, FlaskConical } from "lucide-react";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { hardSkillGroups, softSkills } from "../data/skills";

export function SkillsTables() {
  return (
    <div
      id="competencias"
      className="mb-6 grid items-start gap-4 xl:grid-cols-2 xl:items-stretch"
    >
      <SurfaceCard aria-labelledby="hard-skills-title">
        <h3
          id="hard-skills-title"
          className="font-display text-xl font-semibold tracking-tight"
        >
          Hard Skills — habilidades técnicas
        </h3>
        <p
          id="hard-skills-description"
          className="mt-2 text-sm leading-6 text-muted"
        >
          São competências que você aprende por meio de cursos, treinamentos e
          experiência prática.
        </p>
        <table
          aria-labelledby="hard-skills-title"
          aria-describedby="hard-skills-description"
          className="mt-4 block w-full table-fixed text-left text-sm sm:table"
        >
          {hardSkillGroups.map((group, index) => (
            <tbody key={group.title} className="block sm:table-row-group">
              <tr className="block sm:table-row">
                <th
                  colSpan={2}
                  scope="colgroup"
                  className={
                    "block pb-2 font-semibold sm:table-cell " +
                    (index > 0 ? "border-t border-line pt-4" : "")
                  }
                >
                  {group.title}
                </th>
              </tr>
              {group.rows.map((row, rowIndex) => (
                <tr key={row[0]} className="block sm:table-row">
                  {row.map((skill) => (
                    <td
                      key={skill}
                      className={
                        "block py-1.5 pr-3 align-top text-muted sm:table-cell " +
                        (rowIndex === group.rows.length - 1 ? "sm:pb-4" : "")
                      }
                    >
                      <span className="flex items-start gap-2 leading-5">
                        <FlaskConical
                          size={14}
                          className="mt-0.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {skill}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </SurfaceCard>
      <SurfaceCard
        aria-labelledby="soft-skills-title"
        className="xl:flex xl:flex-col"
      >
        <h3
          id="soft-skills-title"
          className="font-display text-xl font-semibold tracking-tight"
        >
          Soft Skills — habilidades comportamentais
        </h3>
        <p
          id="soft-skills-description"
          className="mt-2 text-sm leading-6 text-muted"
        >
          São características relacionadas à forma como você trabalha, toma
          decisões e se relaciona com outras pessoas.
        </p>
        <table
          aria-labelledby="soft-skills-title"
          aria-describedby="soft-skills-description"
          className="mt-4 w-full text-left text-sm xl:flex-1"
        >
          <tbody>
            {softSkills.map((skill) => (
              <tr key={skill.title} className="[&:last-child>td]:pb-0">
                <td className="pb-3">
                  <div className="flex items-start gap-2.5">
                    <CircleCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-semibold leading-5">{skill.title}</h4>
                      <p className="mt-1 leading-5 text-muted">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SurfaceCard>
    </div>
  );
}
