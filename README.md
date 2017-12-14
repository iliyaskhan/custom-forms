# ICONS

1. Checkmark: `wpdui-icon wpdui-icon-check`
2. Asterisk: `wpdui-icon wpdui-icon-asterisk`

# FIELD: Text, Email, Website

#### Variation 1: When we have only Main Label

1. Main container markup: `<div class="forminator-field--main">...</div>`
2. Main label markup: `<label class="forminator-label--main">Sample label</label>`
3. The **required icon** should be placed after `forminator-label--main`
4. If there's no placeholder, main label should act as it. For that the class **forminator-no_placeholder** should be added to parent div as this example: `<div class="forminator-field--main forminator-no_placeholder"></div>`

#### Variation 2: When we have only Field label

1. Main container markup: `<div class="forminator-field--label">...</div>`
2. Main label markup: `<label class="forminator-label--helper">Sample label</label>`
3. The **required icon** should be placed after `forminator-label--helper`.
4. If there's no placeholder, field label should act as it. For that the class **forminator-no_placeholder** should be added to parent div as this example: `<div class="forminator-field--label forminator-no_placeholder"></div>`

#### Variation 3: When we have Main & Field labels

1. The **required icon** should go in the main label container.
2. If there's no placeholder, field label should act as it. For that the class **forminator-no_placeholder** should be added to parent div as this example: `<div class="forminator-field--label forminator-no_placeholder"></div>`

#### Variation 4: When we have Main, Field and Placeholder

1. Main container markup: `<div class="forminator-field--main">...</div>`
2. Main label markup: `<label class="forminator-label--main">Sample label</label>`
3. Field container markup: `<div class="forminator-field--label">...</div>`
4. Field label markup: `<label class="forminator-label--helper">Sample label</label>`
5. The **required icon** should be placed after `forminator-label--main`

#### Variation 5: When we have Main and Placeholder

1. Main container markup: `<div class="forminator-field--main">...</div>`
2. Main label markup: `<label class="forminator-label--main">Sample label</label>`
3. The **required icon** should be placed after `forminator-label--main`

#### Variation 6: When we have Field and Placeholder

1. Field container markup: `<div class="forminator-field--label">...</div>`
2. Field label markup: `<label class="forminator-label--helper">Sample label</label>`
3. The **required icon** should be placed after `forminator-label--main`

#### Variation 7: When we have only Placeholder

1. The **required icon** should be placed inside `<div class="forminator-field--main"></div>`. **If** the container doesn't exist, should be created. **If** there's only required icon inside the container, then the whole `forminator-field--main` should be removed.

# FIELD: Phone

#### Variation 1: When we have only Main Label (with or without Placeholder)

1. Main container markup: `<div class="forminator-field--main">...</div>`
2. Main label markup: `<label class="forminator-label--main">Sample label</label>`
3. The **required icon** should be placed after `forminator-label--main`
4. If there's no placeholder, nothing else should happen. Label remains intact.

#### Variation 2: When we have only Field label (with or without Placeholder)

1. Main container markup: `<div class="forminator-field--label">...</div>`
2. Main label markup: `<label class="forminator-label--helper">Sample label</label>`
3. The **required icon** should be placed after `forminator-label--helper`.
4. If there's no placeholder, nothing else should happen. Label remains intact.

#### Variation 3: When we have Main & Field labels (with or without Placeholder)

1. The **required icon** should go in the main label container.
2. If there's no placeholder, nothing else should happen. Labels remain intact.

#### Variation 4: When we have Main, Field and Placeholder

1. Main container markup: `<div class="forminator-field--main">...</div>`
2. Main label markup: `<label class="forminator-label--main">Sample label</label>`
3. Field container markup: `<div class="forminator-field--label">...</div>`
4. Field label markup: `<label class="forminator-label--helper">Sample label</label>`
5. The **required icon** should be placed after `forminator-label--main`

#### Variation 5: When we have only Placeholder

1. The **required icon** should be placed inside `<div class="forminator-field--main"></div>`. **If** the container doesn't exist, it should be created. **If** there's only required icon inside the container, then the whole `forminator-field--main` should be removed.