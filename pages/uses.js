import Link from 'next/link'
import Layout from '../components/layout'

export const config = {
  unstable_runtimeJS: false
}

const Uses = (props) => (
  <Layout title='Uses' {...props}>
    <>
      <p>Occassionally somebody will ask me "what _____ do you use". This is the page I point them to. It also helps me look back and see how my tools have evolved.</p>
      <h2>Hardware & Desk</h2>
      <ul>
        <li>💻 <Link href='https://www.apple.com/ca/macbook-pro/'><a target='_blank' rel='noopener'>MacBook Pro 15-inch (2016)</a></Link> - I don't have much use for the Touch Bar, and the keyboard is plagued by issues, but it's hooked up to a display most of the time.</li>
        <li>🍑 <Link href='https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/'><a target='_blank' rel='noopener'>Herman Miller Aeron Chair</a></Link> - This is my chair. There are many like it but this one is mine.</li>
        <li>👨🏼‍💻 <Link href='https://www.hermanmiller.com/products/tables/sit-to-stand-tables/renew-sit-to-stand-tables/product-details/'><a target='_blank' rel='noopener'>Herman Miller Renew Sit-to-Stand Desk</a></Link> - I have this one in walnut. Standing is a good idea when you remember to do it.</li>
        <li>🖥 <Link href='https://www.apple.com/shop/product/HKN62LL/A/lg-ultrafine-5k-display'><a target='_blank' rel='noopener'>LG Ultrafine 27-inch 5K Display</a></Link> - Not a bad display, but not super great looking. I'm still waiting for Apple to release a new one.</li>
        <li>💧 <Link href='https://www.raindesigninc.com/mstand.html'><a target='_blank' rel='noopener'>Rain Design mStand</a></Link> - A perfect perch for my MacBook.</li>
      </ul>

      <h2>Software</h2>
      <ul>
        <li>⌨️ <Link href='https://code.visualstudio.com/yp'><a target='_blank' rel='noopener'>VSCode</a></Link> - I recently switch to VSCode from Atom. Still not quite sure I can tear myself away but I've been enjoying it so far. My config is here.</li>
        <li>⚡️ <Link href='https://hyper.is/'><a target='_blank' rel='noopener'>Hyper</a></Link> - My favourite terminal, with some plugins. I use ZSH.</li>
        <li>🎡 <Link href='https://localbyflywheel.com/'><a target='_blank' rel='noopener'>Local by Flywheel</a></Link> - If I'm working on a Wordpress site, I use Local to run it... locally.</li>
        <li>😴 <Link href='https://insomnia.rest/'><a target='_blank' rel='noopener'>Insomnia</a></Link> (also <Link href='https://paw.cloud/'><a target='_blank' rel='noopener'>Paw</a></Link>) - For HTTP requests. I'm in the midst of evaluating Insomnia as I've been using Paw for some time.</li>
        <li>🔢 <Link href='https://numi.io/'><a target='_blank' rel='noopener'>Numi</a></Link> - A running feed of my calculator. Probably one of my favourite apps.</li>
        <li>🔑 <Link href='https://1password.com/'><a target='_blank' rel='noopener'>1Password</a></Link> - Keeping me sane amongst all these generated passwords. Also manages 2FA for everything.</li>
        <li>🧲  <Link href='http://magnet.crowdcafe.com/'><a target='_blank' rel='noopener'>Magnet</a></Link> - I love using Magnet for window management.</li>
        <li>🌎 <Link href='https://www.tripmode.ch/'><a target='_blank' rel='noopener'>NordVPN</a></Link> - My VPN of choice. Invaluable in airports and coffee shops. </li>
        <li>🎵 <Link href='https://spotify.com'><a target='_blank'>Spotify</a></Link> - I used Spotify for its superior (in my opinion) curated playlists.</li>
      </ul>

      <h2>Personal Gear</h2>
      <ul>
        <li>📸 <Link href='http://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t2/'><a target='_blank' rel='noopener'>Fujifilm X-T2</a></Link></li>
        <li>🎒 <Link href='https://topodesigns.com/collections/backpacks/products/mountain-pack?variant=1105203777'><a target='_blank' rel='noopener'>Topo Designs Backpack</a></Link> - I have a bit of a backpack addiction, but this is my current daily choice. Perfect for the bike commute to work or a weekend getaway.</li>
        <li>🚲 <Link href='https://www.specialized.com/us/en/awol-comp/p/106554'><a target='_blank' rel='noopener'>Specialized AWOL Comp</a></Link> - Cycling is my favourite pastime, as well as form of exercise. I like to do a fair bit of gravel bikepacking, so this serves me well.</li>
      </ul>
    </>
    <style jsx>{`

    `}</style>
  </Layout>
)

export default Uses
