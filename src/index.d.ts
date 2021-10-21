interface FakeAttachment {
	WorldPosition: Vector3;
	WorldAxis: Vector3;
}

interface LightningBolt {
	Enabled: boolean;
	Attachment0: FakeAttachment;
	Attachment1: FakeAttachment;
	MinRadius: number;
	MaxRadius: number;
	Frequency: number;
	AnimationSpeed: number;
	Thickness: number;
	MinThicknessMultiplier: number;
	MaxThicknessMultiplier: number;
	MinTransparency: number;
	MaxTransparency: number;
	PulseSpeed: number;
	PulseLength: number;
	FadeLength: number;
	ContractFrom: number;
	Color: Color3 | ColorSequence;
	ColorOffsetSpeed: number;
	CurveSize0: number;
	CurveSize1: number;
	Destroy(this: LightningBolt): void;
	DestroyDissipate(this: LightningBolt, TimeLength?: number, Strength?: number): void;
}

interface LightningBoltConstructor {
	new (attachment0: FakeAttachment, attachment1: FakeAttachment, partCount: number): LightningBolt;
}

declare const LightningBolt: LightningBoltConstructor;
export = LightningBolt;
