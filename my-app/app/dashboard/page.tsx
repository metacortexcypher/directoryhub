'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AgencyDashboard() {
  const [agencyName, setAgencyName] = useState('Your Agency Name')
  const [agencyDescription, setAgencyDescription] = useState('Your agency description goes here...')

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    console.log('Profile update', { agencyName, agencyDescription })
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Agency Dashboard</h1>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Agency Profile</CardTitle>
              <CardDescription>Update your agency's information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Agency Name</Label>
                    <Input 
                      id="name" 
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      value={agencyDescription}
                      onChange={(e) => setAgencyDescription(e.target.value)}
                    />
                  </div>
                </div>
                <Button className="mt-4" type="submit">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View your agency's performance</CardDescription>
            </CardHeader>
            <CardContent>
              {/* TODO: Implement analytics charts and data */}
              <p>Analytics data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leads">
          <Card>
            <CardHeader>
              <CardTitle>Leads</CardTitle>
              <CardDescription>Manage your incoming leads</CardDescription>
            </CardHeader>
            <CardContent>
              {/* TODO: Implement leads management system */}
              <p>Leads management system will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}