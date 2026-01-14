type AuthState = {
  accessToken: string | null
}

class SimpleStore<TState> {
  private state: TState
  private listeners = new Set<(state: TState) => void>()

  constructor(initialState: TState) {
    this.state = initialState
  }

  getState(): TState {
    return this.state
  }

  setState(partial: Partial<TState>): void {
    this.state = { ...this.state, ...partial }
    for (const l of this.listeners) l(this.state)
  }

  subscribe(listener: (state: TState) => void): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }
}

function readToken(): string | null {
  try {
    return localStorage.getItem('access_token')
  } catch {
    return null
  }
}

export const authStore = new SimpleStore<AuthState>({
  accessToken: readToken()
})

export function setAccessToken(token: string | null): void {
  try {
    if (token) localStorage.setItem('access_token', token)
    else localStorage.removeItem('access_token')
  } catch {
    // ignore
  }

  authStore.setState({ accessToken: token })
}
