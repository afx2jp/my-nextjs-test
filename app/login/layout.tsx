// Force dynamic rendering for login page to prevent build-time issues with Supabase client
export const dynamic = 'force-dynamic'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

