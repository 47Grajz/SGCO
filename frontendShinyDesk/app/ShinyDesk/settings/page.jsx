import React from 'react'
import SettingsView from '@/src/components/SettingsView/SettingsView'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tools from '@/src/components/SettingsView/Tools'
function page() {
  return (
    <Tabs defaultValue="account" className="w-full mt-5 px-5">
    <TabsList className="w-full">
      <TabsTrigger className="w-full" value="account">Consultorio</TabsTrigger>
      <TabsTrigger className="w-full" value="password">Inventario</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <SettingsView></SettingsView>
    </TabsContent>
    <TabsContent value="password">
      <Tools></Tools>
    </TabsContent>
  </Tabs>
  
  )
}

export default page