import { Planet } from "@/types/planet";
import { useState } from "react"

const PLANET_LABEL: Record<Planet['type'], string> = {
  name: 'Nombre',
  color: 'Color',
  Type: 'tipo',
  Distance: 'Distancia',
  Moons: "Lunas"
  dayLengthHours: "duración del día en horas"
  temperature: "Temperatura"
  description: "Descripción"
  funFact: "Dato divertido"
  other: 'Otro',
};


export function Caracteristics({ planet }: { planet: planet }) {
  
  return (
    <Link href={`/planets/${planet.id}`} className="block transition-transform hover:-translate-y-0.5">
      <Card className="h-full">
        <CardBody>
          <div className="flex items-center gap-3">
            <Avatar name={planet.name} src={photo} size="lg" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-navy-900">{planet.name}</p>
              <p className="truncate text-xs text-navy-500">{planet.breed ?? ' '}</p>
              <div className="mt-1.5">
                <Badge tone="neutral">{PLANET_LABEL[planet.type]}</Badge>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}




