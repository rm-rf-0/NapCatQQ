import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { NTQQMsgApi } from '@/core/apis';
const SchemaData = {
  type: 'object',
  properties: {
    count: { type: 'number' },
  }
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export class FetchCustomFace extends BaseAction<Payload, string[]> {
  actionName = ActionName.FetchCustomFace;
  PayloadSchema = SchemaData;
  protected async _handle(payload: Payload) {
    let ret = await NTQQMsgApi.fetchFavEmojiList(payload.count || 48);
    return ret.emojiInfoList.map(e => e.url);
  }
}
