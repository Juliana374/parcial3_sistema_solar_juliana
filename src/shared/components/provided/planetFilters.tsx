import { Material } from "three";


interface planetFilters {
  name: string;
  type: Material | '';
  onNameChange: (value: string) => void;
  ontypesChange: (value: Material | '') => void;
}

const SELECT = 'w-full rounded-md border border-navy-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-navy-100';


export function planetFilters({
 name,
 type,
  onNameChange,
  onTypeChange,
}: planetFilters) {
       const [contador, setContador] = useState(0)
    
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <InputText label="Buscar" name="search" value={name} onChange={onNameChange} placeholder="Nombre del planeta" />

      <div className="space-y-1">
        <label htmlFor="types" className="block text-sm font-medium text-navy-700">
          
        </label>
        <select
          id="types"
          value={types}
          onChange={(event) => ontypesChange(event.target.value as Material | '')}
          className={SELECT}
        >
          <option value="">Todas</option>
          <option value="name">Nombre</option>
          <option value="color">Color</option>
          <option value="type">Tipo</option>
          <option value="Distance">Distancia</option>
          <option value="other">Otro</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="sex" className="block text-sm font-medium text-navy-700">
          Sexo
        </label>
        <select
          id="sex"
          value={sex}
          onChange={(event) => ontypesChange(event.target.value as types | '')}
          className={SELECT}
        >
          <option value="">Todos</option>
          <option value="Rocky">Rocoso</option>
          <option value="Giant">Gigante</option>
           <option value="Gaseous">Gaseoso</option>
            <option value="Gaseous giant">Gaseoso gigante</option>
        </select>
      </div>
    </div>
  );
}
