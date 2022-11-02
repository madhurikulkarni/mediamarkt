import './styles.css'

interface FormProps {
  value: string
  onSearchPressed: (event: any) => void
  onChangeText: (text: string) => void
}

export const Form = ({ value, onSearchPressed, onChangeText }: FormProps) => {
  return (
    <form className="formWrapper">
      <input
        onChange={(e) => {
          onChangeText(e.target.value)
        }}
        className="inputfield"
        type="string"
        value={value}
        onKeyPress={(event) => onSearchPressed(event)}
      />
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="subnav-search-icon"
      >
        <path
          fillRule="evenodd"
          d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
        ></path>
      </svg>
    </form>
  )
}
