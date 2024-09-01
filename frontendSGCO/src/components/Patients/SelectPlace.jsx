import { AutoComplete, Option } from "@/components/ui/autocomplete"
import  Places  from "../Patients/Places.json";
import { useState } from "react"


export function SelectPlace({ field, form }) {
  const [isLoading, setLoading] = useState(false)
  const [value, setValue] = useState()

  const handleSelect = (currentValue) => {
    form.setFieldValue(field.name, currentValue.value);
    console.log(currentValue.value);
    // console.log(value);
  };
  
  return (
    <div className="mb-6">
      <AutoComplete
        options={Places}
        emptyMessage="Sin resultados."
        placeholder="Lugar de nacimiento"
        isLoading={isLoading}
        onValueChange={handleSelect}
        value={value}
      />
    </div>
  )
}