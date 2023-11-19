const ThreadRepository = require("../ThreadRepository");

describe("ThreadRepository abstract", () => {
  it("should throw error when invoke abstract behavior", async () => {
    const threadRepository = new ThreadRepository();

    // Action and Assert
    await expect(threadRepository.addThread("")).rejects.toThrowError("THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    await expect(threadRepository.isThreadExist("")).rejects.toThrowError("THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    await expect(threadRepository.getThreadById("")).rejects.toThrowError("THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    /**
     * @TODO 1
     * Lengkapi pengujian untuk `ThreadRepository` abstract
     * Pastikan semua fungsi yang ada di `ThreadRepository`
     * membangkitkan `Error` THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED
     *
     */
  });
});