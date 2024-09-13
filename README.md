# Prompt Gallery

This project is a web application for displaying and searching various prompts across different categories.

## Features

- Display a list of prompts from a JSON file
- Search prompts by keywords
- Filter prompts by categories
- Support for two languages: English and Russian
- Simple and intuitive interface
- Various prompt categories (SMM, relationships, family, creativity, career, sales)
- Ability to copy prompt text to clipboard

## Project Structure

- `index.html`: Main HTML page of the application
- `app.js`: JavaScript code for loading, filtering, and displaying prompts
- `prompts.json`: JSON file containing the list of prompts
- `LICENSE`: MIT license file
- `icons/`: Folder with icons for various platforms

## Usage

1. Open `index.html` in a web browser.
2. Browse the list of available prompts.
3. Use the search field to filter prompts by keywords.
4. Select a category to filter prompts.
5. Click on a prompt card to open the full text.
6. Click on the prompt text in the modal window to copy it to the clipboard.

## Development

To add new prompts, edit the `prompts.json` file following the existing structure. Each prompt should be an object with the following format:

```json
{
  "category": {
    "en": "Category in English",
    "ru": "Категория на русском"
  },
  "name": {
    "en": "Prompt name in English",
    "ru": "Название промпта на русском"
  },
  "description": {
    "en": "Brief description in English",
    "ru": "Краткое описание на русском"
  },
  "text": {
    "en": "Full prompt text in English",
    "ru": "Полный текст промпта на русском"
  },
  "dateAdded": "YYYY-MM-DDT00:00:00Z"
}
```

## License

This project is distributed under the MIT License. See the [LICENSE](LICENSE) file for details.
