import Book from "./page";
export const metadata = {
    title: 'Book-us',
    description: 'Book your dental service',
  }

export default function layout() {
  return (
    <div>
        <Book />
    </div>
  )
}
