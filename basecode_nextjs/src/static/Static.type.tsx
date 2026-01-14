export interface StaticProps {
  title: string
  description: string
  keywords: string[]
}

export interface IpInfo {
  ip: string
  city?: string
  region?: string
  country?: string
  loc?: string
  org?: string
  postal?: string
  timezone?: string
}

export interface Post {
  id: number
  title: string
  body: string
}
