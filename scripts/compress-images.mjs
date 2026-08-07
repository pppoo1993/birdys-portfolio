import { execSync } from 'child_process'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const IMG_DIR = 'public/images'
const MAX_KB = 200
const QUALITY = 80

const files = readdirSync(IMG_DIR).filter(f => /\.(png|jpe?g)$/i.test(f) && !f.includes('_opt'))

for (const f of files) {
  const path = join(IMG_DIR, f)
  const kb = statSync(path).size / 1024
  if (kb > MAX_KB) {
    const out = path.replace(/\.(png|jpe?g)$/i, '_opt.jpg')
    execSync(`sips -s format jpeg -s formatOptions ${QUALITY} "${path}" --out "${out}"`, { stdio: 'pipe' })
    console.log(`${f}: ${kb.toFixed(0)}KB → ${(statSync(out).size/1024).toFixed(0)}KB`)
  }
}
