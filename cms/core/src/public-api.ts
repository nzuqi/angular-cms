/*
 * Public API Surface of core
 */

export * from './utils/appInjector';
export * from './utils/outside-zone-event-plugin';
export * from './utils/route-reuse-strategy';

export * from './bases/cms-component';
export { CmsProperty } from './bases/cms-property';
export { CmsPropertyFactoryResolver, CmsPropertyFactory, PROPERTY_PROVIDERS_TOKEN, getCmsPropertyFactory } from './bases/cms-property.factory';
export * from './bases/content-data';
export * from './bases/selection-factory';

export * from './render/cms-content';

export * from './constants/content-type';
export * from './constants/types';
export * from './constants/ui-hint'

export * from './decorators/metadata-key';
export * from './decorators/content-type.decorator';
export * from './decorators/property.decorator';
export * from './decorators/validate.decorator';

export * from './directives/insert-point.directive';
export * from './render/content-area/content-area.directive';
export * from './render/cms-property.directive';
export * from './render/property-render.factory';

export * from './models/block.model';
export * from './models/content.model';
export * from './models/media.model';
export * from './models/page.model';

export { slugify, sortTabByTitle, clone, generateUUID } from './helpers/common';

export * from './services/content-type.service';
export * from './services/block.service';
export * from './services/page.service';
export * from './services/media.service';
export * from './services/browser-location.service';
export * from './services/browser-storage.service';

export * from './cms';
export { CoreModule, CMS_PROVIDERS } from './core.module';
export * from './angular-cms.module';