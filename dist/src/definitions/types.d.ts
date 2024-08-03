type Primitive = string | number | boolean | null | undefined;
type PrimitiveArray = Primitive[];
type PrimitiveRecord = Record<string, Primitive>;
type PrimitiveMap = Map<string, Primitive>;
type NumArray = number[];
type TimezoneOffsets = {
    [key: string]: {
        offset: number;
        place: string;
    };
};
export type { Primitive, PrimitiveArray, PrimitiveRecord, PrimitiveMap, NumArray, TimezoneOffsets, };
//# sourceMappingURL=types.d.ts.map