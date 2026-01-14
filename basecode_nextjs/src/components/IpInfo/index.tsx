import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import type { IpInfo } from '@/types/static/Static.type'

function getIpInfoHost() {
  const host = process.env.NEXT_PUBLIC_IPINFO_HOST as string | undefined
  return host?.trim() ? host.trim().replace(/\/+$/, '') : 'https://ipinfo.io'
}

async function fetchIpInfo(): Promise<IpInfo> {
  const baseURL = getIpInfoHost()
  const res = await axios.get<IpInfo>(`${baseURL}/json`, {
    headers: { Accept: 'application/json' }
  })
  return res.data
}

export default function IpInfoPage() {
  const ipInfoQuery = useQuery({
    queryKey: ['ipinfo'],
    queryFn: fetchIpInfo,
    retry: false
  })

  if (ipInfoQuery.isLoading) {
    return (
      <section className='space-y-4'>
        <Skeleton className='h-9 w-40' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-60' />
          <Skeleton className='h-4 w-72' />
          <Skeleton className='h-4 w-64' />
          <Skeleton className='h-4 w-80' />
        </div>
      </section>
    )
  }

  if (ipInfoQuery.isError) {
    return (
      <section className='space-y-4'>
        <h1 className='text-3xl font-bold'>IP Info</h1>
        <p className='text-muted-foreground'>Không lấy được thông tin IP.</p>
        <Button
          onClick={() => ipInfoQuery.refetch()}
          type='button'
        >
          Thử lại
        </Button>
      </section>
    )
  }

  const data = ipInfoQuery.data
  if (!data) return null

  return (
    <section className='space-y-4'>
      <h1 className='text-3xl font-bold'>IP Info</h1>
      <p className='text-muted-foreground'>Nguồn: {getIpInfoHost()}</p>

      <div className='max-w-2xl rounded-lg border bg-card p-6 shadow-sm'>
        <div className='grid grid-cols-1 gap-3 text-sm'>
          <div>
            <span className='text-muted-foreground'>IP:</span> <span className='font-semibold'>{data.ip}</span>
          </div>
          {data.city ? (
            <div>
              <span className='text-muted-foreground'>City:</span> {data.city}
            </div>
          ) : null}
          {data.region ? (
            <div>
              <span className='text-muted-foreground'>Region:</span> {data.region}
            </div>
          ) : null}
          {data.country ? (
            <div>
              <span className='text-muted-foreground'>Country:</span> {data.country}
            </div>
          ) : null}
          {data.timezone ? (
            <div>
              <span className='text-muted-foreground'>Timezone:</span> {data.timezone}
            </div>
          ) : null}
          {data.org ? (
            <div>
              <span className='text-muted-foreground'>Org:</span> {data.org}
            </div>
          ) : null}
          {data.postal ? (
            <div>
              <span className='text-muted-foreground'>Postal:</span> {data.postal}
            </div>
          ) : null}
          {data.loc ? (
            <div>
              <span className='text-muted-foreground'>Loc:</span> {data.loc}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
