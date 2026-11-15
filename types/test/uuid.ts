import * as Avro from '../index'

const uuid = Avro.Type.forSchema({
    type: "string",
    logicalType: "uuid",
} as Avro.Schema);

const fixedUuid = Avro.Type.forSchema({
    name: "Uuid",
    type: "fixed",
    size: 16,
    logicalType: "uuid",
} as Avro.Schema);

const record = Avro.Type.forSchema({
    name: "Record",
    type: "record",
    fields: [
        { name: "id", type: "string" },
    ],
}, {
    logicalTypes: { uuid: Avro.types.UuidType },
    logicalTypeHook: (info) => {
        const reason: "unregistered" | "invalid" = info.reason;
        void reason;
    },
    logicalTypeWarnings: false,
});

const disabled = Avro.Type.forSchema(
    { type: "string", logicalType: "uuid" },
    { logicalTypes: { uuid: null } }
);

void uuid;
void fixedUuid;
void record;
void disabled;
