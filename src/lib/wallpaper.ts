// Picks a random green-nature photo from the Openverse API (openverse.org)
// on each page load, filtered to CC0 so no attribution is required. Falls
// back gracefully (returns null) on any network or API failure — callers
// should keep a bundled local image as the base layer.

const SEARCH_ENDPOINT = 'https://api.openverse.org/v1/images/'
const QUERY = 'green forest nature'
const LICENSE = 'cc0'
const RESULTS_PER_PAGE = 20
const PAGES_TO_SAMPLE_FROM = 5

interface OpenverseResult {
  id: string
}

export async function fetchRandomWallpaper(signal?: AbortSignal): Promise<string | null> {
  try {
    const page = Math.floor(Math.random() * PAGES_TO_SAMPLE_FROM) + 1
    const params = new URLSearchParams({
      q: QUERY,
      license: LICENSE,
      mature: 'false',
      size: 'large',
      page_size: String(RESULTS_PER_PAGE),
      page: String(page),
    })

    const response = await fetch(`${SEARCH_ENDPOINT}?${params}`, { signal })
    if (!response.ok) return null

    const data: { results?: OpenverseResult[] } = await response.json()
    const results = data.results ?? []
    if (results.length === 0) return null

    const pick = results[Math.floor(Math.random() * results.length)]
    return `${SEARCH_ENDPOINT}${pick.id}/thumb/?full_size=true`
  } catch {
    // Network blocked, offline, request aborted, or a malformed response —
    // the caller keeps its local fallback image in all of these cases.
    return null
  }
}
