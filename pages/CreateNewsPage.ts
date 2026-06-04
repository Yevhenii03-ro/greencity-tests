import { Page, Locator } from '@playwright/test';

export class CreateNewsPage {
  readonly titleField: Locator;
  readonly tagSection: Locator;
  readonly addImageField: Locator;
  readonly mainTextField: Locator;
  readonly authorField: Locator;
  readonly dateField: Locator;
  readonly sourceField: Locator;

  readonly cancelButton: Locator;
  readonly previewButton: Locator;
  readonly publishButton: Locator;

  constructor(private page: Page) {
    this.titleField = page.getByText('Title');
    this.tagSection = page.getByText('Tag');
    this.addImageField = page.getByText('Add Image');
    this.mainTextField = page.getByText('Main Text');
    this.authorField = page.getByText('Author');
    this.dateField = page.getByText('Date');
    this.sourceField = page.getByText('Source');

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.previewButton = page.getByRole('button', { name: /preview/i });
    this.publishButton = page.getByRole('button', { name: /publish/i });
  }
}