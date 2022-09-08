export abstract class Mapper<I, O> {
    protected abstract mapFrom(param: I): O;
    protected abstract mapTo(param: O): I;
}