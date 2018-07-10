import { DEFAULT_LANGUAGE } from '../../app.config';
import { LanguageCode } from '../../data/types/gql-generated-types';

export function getDefaultLanguage(): LanguageCode {
    return DEFAULT_LANGUAGE;
}
