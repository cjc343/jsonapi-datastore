// These are not 100% - While JsonApiDataStoreModel does wrap some other type, it does not inherit that type's fields, leading to errors when trying to reference fields which exist on T and therefore implicitly exist on JsonApiDataStoreModel
export declare class JsonApiDataStore {
  new ():JsonApiDataStore;
  destroy<T>(model: JsonApiDataStoreModel<T>): void;
  find<T>(type: string, id: string): JsonApiDataStoreModel<T>;
  findAll<T>(type: string): JsonApiDataStoreModel<T>[];
  reset(): void;
  syncWithMeta<T>(data: {}): JsonApiDataStoreModel<T>[];
  sync<T>(data: {}): JsonApiDataStoreModel<T>[] | JsonApiDataStoreModel<T>;
}

export declare class JsonApiDataStoreModel<T> {
  new (type: string | null, id: string | null): JsonApiDataStoreModel<T>;
  constructor(type: string | null, id: string | null);
  serialize(opts?: {}): JsonApiDataStoreModel<T>;
  setAttribute(attrName: string, value: any): void;
  setRelationship(relName: string, models: JsonApiDataStoreModel<T> | JsonApiDataStoreModel<T>[]): void;
}

