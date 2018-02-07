/**
 *
 * @authors NYY
 *@company ijia-tech
 * @date   2018-02-07 15:13
 */
import QueryFormatter from "../testmodule/QueryFormatter";

test("should transform value to lowercase",()=>{
    let result = QueryFormatter.format("Something");
    expect(result).toBe("something");
});

test("should escape dash",()=>{
    let result = QueryFormatter.format("Some-thing");
    expect(result).toBe("some\\-thing");
});

test("should escape multiple dash",()=>{
    let result = QueryFormatter.format("Some-thing-other");
    expect(result).toBe("some\\-thing\\-other");
});

test("should not change escape dash",()=>{
    let result = QueryFormatter.format("some\\-thing");
    expect(result).toBe("some\\-thing");
});

test("should not change quoted dash",()=>{
    let result = QueryFormatter.format("\"Some-thing\"");
    expect(result).toBe("\"some-thing\"");
});