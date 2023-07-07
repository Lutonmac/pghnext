import List from "./page"

  export const metadata = {
    title: 'Company',
    description: 'About PGH company policy',
  }
  
  export default function layout() {
    return (
      <div>
        <List />
      </div>
    )
  }
  