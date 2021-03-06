/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import * as ContentURLs from '../../../shared/constants/content-pages-locations';

// Default location settings.
export const HOME_PAGE = ContentURLs.HISTORY_PAGE;

// Tabbar dimensions.
export const TABBAR_HEIGHT = 39; // px
export const TAB_DEFAULT_WIDTH = 240; // px
export const TAB_PINNED_WIDTH = 64; // px
export const TAB_MIN_WIDTH = TAB_PINNED_WIDTH; // px
export const TAB_HEIGHT = 29; // px
export const TAB_OVERLAP = 15; // px
export const NEW_TAB_BUTTON_WIDTH = 66; // px

// Navbar dimensions.
export const NAVBAR_HEIGHT = 40; // px

// Search bar dimensions.
export const SEARCH_BAR_HEIGHT = 25; // px

// Content z-indices.
export const BROWSER_CONTENT_BASE_ZINDEX = 0;

// Chrome z-indices.
export const BROWSER_CHROME_BASE_ZINDEX = 1;
export const BROWSER_OVERVIEW_BASE_ZINDEX = 0;

// Overview dimensions.
export const CARD_WIDTH = 140; // px
export const CARD_HEIGHT = 175; // px
export const CARD_BADGE_WIDTH = 24; // px
export const CARD_BADGE_HEIGHT = 24; // px
export const CARD_BADGE_LARGE_WIDTH = 32; // px
export const CARD_BADGE_LARGE_HEIGHT = 32; // px

// Other floating UI elements z-indices.
export const STATUS_BAR_ZINDEX = 1;
export const DEVELOPER_BAR_ZINDEX = 1;
export const SEARCH_BAR_INDEX = 1;
